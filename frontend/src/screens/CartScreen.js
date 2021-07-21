import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';
import { Link } from 'react-router-dom';
import product from '../components/Product'

export default function CartScreen(props) {

    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    const removeFromCartHandler = (id) => {

        dispatch(removeFromCart(id));
    };
    const checkoutHandler = () => {
        props.history.push('/signin?redirect=shipping');

    };
    return (
        <div className='row top'>
            <div className='col-2'>
                <h1>Carrito de compras</h1>
                {cartItems.length === 0 ? <MessageBox>
                    Carrito vacío. <Link to='/'>Ir a catálogo</Link>
                </MessageBox>
                    :
                    <ul>

                        {

                            cartItems.map((item) => (
                                <li key={item.product}>
                                    <div className='row'>
                                        <div>
                                            <img

                                                src={item.image}
                                                alt={item.name}
                                                className='small'
                                            >

                                            </img>

                                        </div>
                                        <div className='min-30'>

                                            <Link to={`/product/${item.product}`}> {item.name}</Link>
                                        </div>
                                        <div>
                                            <select
                                                value={item.qty}
                                                onChange={(e) =>
                                                    dispatch(
                                                        addToCart(item.product, Number(e.target.value))
                                                    )
                                                }
                                            >
                                                {[...Array(item.countInStock).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>${item.price}</div>
                                        <button onClick={() =>

                                            removeFromCartHandler(item.product)



                                        }>Eliminar</button>


                                    </div>

                                </li>

                            ))
                        }
                    </ul>



                }
            </div>
            <div className='col-1'></div>
            <div className='card card-body'></div>
            <ul>
                <li>
                    <h2>
                        Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items ) : ${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                    </h2>
                </li>
                <li>
                    <button type='button' onClick={checkoutHandler} className='primary block' disabled={cartItems.length === 0}>Proceder al pago</button>
                </li>
            </ul>
        </div>




    );


}