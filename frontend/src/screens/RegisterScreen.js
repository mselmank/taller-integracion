import { register } from '../actions/userActions';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function RegisterScreen(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const userRegister = useSelector((state) => state.userRegister);
    const { userInfo } = userRegister;

    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if(password!== confirmPassword){
            alert('Las contraseñas no coinciden')
        }else{
dispatch(register(name, email, password))
        }

    }
    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
    }, [userInfo]
    );
    return (
        <div>
            <form className='form' onSubmit={submitHandler}>
                <div>
                    <h1>Gracias por registrarse</h1>
                </div>
                <div>
                    <label htmlFor='name'>Nombre</label>
                    <input type="text" id="name" placeholder='Nombre' required
                        //traemos el evento y recuperamos el correo que ingreso en input.
                        onChange={e => setName((e.target.value))}
                    ></input>
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
                    <label htmlFor='confirmPassword'>Confirmar Contraseña</label>
                    <input type="password" id="confirmPassword" placeholder='Confirmar Contraseña' required
                        //traemos el evento y recuperamos el correo que ingreso en input.
                        onChange={e => setConfirmPassword((e.target.value))}
                    ></input>
                </div>
                <div>
                    <label>
                        <button className='primary' type='submit'>Registrarme</button>
                    </label>
                </div>
                <div>
                    <label>
                        <div>
                            Ya tienes una cuenta? {''}
                            <Link to='/signin'>Inicia sesión</Link>
                        </div>
                    </label>
                </div>
            </form>
        </div>
    );

}