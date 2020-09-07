import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
   const {img,name,seller,price,stock,key} = props.product;
    return (
        <div className="product-content">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h3 className="product-name"><Link to={"/product/"+key}>{name}</Link></h3>
                <br></br>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                 <p><small>only {stock} left in stock - order soon</small></p>
                 {props.showAddToCart && <button className="addToCartBtn" onClick={()=>props.handalerAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}
            </div>
        </div>
    );
};

export default Product;