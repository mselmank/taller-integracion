import React from 'react';
import Product from '../components/Product';
import data from '../data';

export default function ProductScreen(props) {
    const product = data.products.find(x = x._id === props.match.params.id);
    if (!product) {
        return <div>Producto no encontrado </div>;
    }
    return <div>

        <div className='row'>
            <div className='col-2'>
                <img className='large'src={product.image} alt={produc.name}></img>

            </div>

            <div className='col-1'></div>
            <ul>
            <li>

                <h1>{product.name}</h1>
            </li>
            <li>
            <Rating rating={product.rating}
            numReviews={product.numReviews} ></Rating>
            </li>
            <li> Precio : ${product.price} </li>
            <li>Descripcion : $ {product.description}</li>
            </ul>
            <div className='col-1'></div>
        </div>
    </div>;

}