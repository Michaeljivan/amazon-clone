import React from 'react';
import '../product.css';

function Product({id, name, price, rating, imageUrl}) {
    return (
        <div className={"product"}>
            <div className={"product_info"}>
                <p>{name}</p>
                <p className={"product_price"}>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className={"product_rating"}>
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p>*</p>
                        ))
                    }
                </div>
            </div>

            <img src={imageUrl} alt={"Product Image"} />
            <button>Add to basket</button>
        </div>
    );
}

export default Product;
