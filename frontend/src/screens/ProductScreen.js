import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import Rating from '../components/Rating';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { detailsProduct } from '../actions/productActions';


export default function ProductScreen(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const productDetails = useSelector(state => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(()=>{
        dispatch(detailsProduct(productId));

    },[dispatch,productId]);


    return (
        <div>
            {loading ? (<LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant='danger'>{error}</MessageBox>
            ) : (
                <div>
                    <Link to="/">Atras</Link>
                    <div className="row top">
                        <div className="col-2">
                            <img className="medium" src={product.image} alt={product.name}></img>

                        </div>

                        <div className="col-1"></div>
                        <ul>
                            <li>

                                <h1>{product.name}</h1>
                            </li>
                            <li>
                                <Rating
                                    rating={product.rating}
                                    numReviews={product.numReviews}
                                ></Rating>
                            </li>
                            <li> Precio : ${product.price} </li>
                            <li>
                                Descripcion :
                                <p> {product.description}</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-1">
                        <div className="card card-body">
                            <ul>
                                <li>
                                    <div className="row">
                                        <div>Precio</div>
                                        <div className="price">${product.price}</div>
                                    </div>
                                </li>
                                <li>


                                    <div className="row">
                                        <div>Stock</div>
                                        <div>
                                            {product.countInStock > 0 ? (
                                                <span className="success">En Stock</span>
                                            ) : (
                                                <span className="danger">No se encuentra el producto</span>

                                            )}
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <button className="primary block">Agregar al carro</button>
                                </li>
                                <li />
                            </ul>

                        </div>

                    </div>
                </div>
            )}
        </div>

    );

}
