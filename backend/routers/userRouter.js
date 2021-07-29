import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import data from '../data.js';
import User from '../models/userModel.js';
import { generateToken } from '../utils.js';

const userRouter = express.Router();

userRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    // await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    // Enviamos una ajax request para validar el email del usuario en la DB, comparamos el email en la BD con el email 
    // dentro del body del request.
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      // Si existe un usuario con ese email, entonces validamos el password comparando lo ingresadopor el usuario con lo que hay en la BD con bcrypt.
      if (bcrypt.compareSync(req.body.password, user.password)) {
        // si es verdadero entonces enviamos una parte solamente del USER. con res.send. 
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: 'Password o usuario invalido' });
  })
);

export default userRouter;