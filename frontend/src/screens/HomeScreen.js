import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

// Traemos la data del backend para renderizarla en homeScreen 
// Usamos hookstate para manejar el estado
// seteamos un hookstate loading y capuramos el error
export default function HomeScreen() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fecthData = async () => {
            try {

                setLoading(true);
                const { data } = await axios.get('/api/products');
                setLoading(false);
                setProducts(data);

            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fecthData();

    }, []);
    return (
        //validamos el estado de loading con operador ternario si es true.
        // evaluamos error si es true, de ser asi mostramos el error.
        //si no hay error renderiza los productos.
        // recorremos la API desde su key (_id) por cada atributo del objeto con MAP.
        <div>
            {loading ? (<LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant='danger'>{error}</MessageBox>
            ) : (
                <div className="row center">
                    {products.map((product) => (
                        <Product key={product._id} product={product}></Product>

                    ))}


                </div>
            )}
        </div>
    );
}