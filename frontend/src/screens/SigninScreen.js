import { signin } from '../actions/userActions';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';

export default function SigninScreen(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const redirect = props.location.search? props.location.search.split("=") [1]: '/';

    const dispatch= useDispatch ();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email,password));
       
    }
    useEffect(()=>
    {
        if(userInfo) {
            props.history.push(redirect);
        }
    },[userInfo]
   
    );
    return (

        <div>
            <form className='form' onSubmit={submitHandler}>
                <div>
                    <h1>Gracias por registrarse</h1>
                </div>
                <div>

                    <label htmlFor='email'>Correo</label>
                    <input type="email" id="email" placeholder='Correo' required
                        //traemos el evento y recuperamos el correo que ingreso en input.
                        onChange={e => setEmail((e.target.value))}


                    ></input>
                </div>
                <div>
                   
                </div>
                <div>

                    <label htmlFor='password'>Contraseña</label>
                    <input type="password" id="password" placeholder='Contraseña' required
                        //traemos el evento y recuperamos el correo que ingreso en input.
                        onChange={e => setPassword((e.target.value))}


                    ></input>
                </div>

                <div>

                    <label>
                        <button className='primary' type='submit'>Ingrese</button>

                    </label>
                </div>


                <div>

                    <label>

                        <div>

                            Nuevo cliente? {''}
                            <Link to='/register'>Crear nueva cuenta.</Link>

                        </div>
                    </label>
                </div>




            </form>

        </div>
    );

}