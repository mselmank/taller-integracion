import react from 'react';

export default function CartScreen(props) {

    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;

    return (
        <div>
            <h1>Carro de compras</h1>
            <p>AGREGAR AL CARRO: ProductID:{productId} Qty:{qty}</p>
        </div>
    );


}