import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ProductReview from '../ProductReview/ProductReview';
import Cart from '../Cart/Cart';
import './ReviewOrder.css'


const ReviewOrder = () => {

    const [cart,setCart] = useState([]);
    useEffect(()=>{
        // cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts= productKeys.map(key =>{
            const product = fakeData.find(pd =>pd.key===key);
            product.quantity =savedCart[key];
            return product;
        });
        setCart(cartProducts);
    },[]);

    const removeItem =(productKey)=>{
        
        const newCart =cart.filter(pd =>pd.key !==productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    return (
        <div className="reviewProductContent">
            <div className="reviewProduct">
                {
                    cart.map(pd => <ProductReview key={pd.key} removeProduct={removeItem} product={pd}></ProductReview>)
                }
            </div>
            <div className="reviewCart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default ReviewOrder;