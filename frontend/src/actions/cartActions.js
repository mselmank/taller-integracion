import Axios from 'axios';
import {CART_ADD_ITEM} from '../constants/cartConstants';

export const addToCart = (productId,qty) => async (dispatch,getState) =>{
    //generamos una Ajax request al backend con get para traer la info de un producto, await por que espera una respuesta.
    const {data} = await Axios.get(`api/products/${productId}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            name: data.name,
            image: data.image,
            price: data.image,
            countInStock: data.countInStock,
            product: data._id,
            qty,


        },
    });
    
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}; 