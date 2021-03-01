import React from 'react';
import { connect } from 'react-redux';

import { removeItem, decreaseQuantity, addItem } from '../../redux/cart/cart.action';

import './checkout-item.style.scss';

const CheckoutItem = ( {  item ,clearItem, addItem, decItem} ) =>  {
    const { id, imageUrl, price, name, quantity } = item;
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <div className='quantity-container'>
            <div className='remove-button' onClick={ () => decItem(id)}>
                &#8810;
            </div>
            <span className='quantity'>{quantity}</span>
            <div className='remove-button' onClick={ () => addItem(item)}>
                &#8811;
            </div>
        </div>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={ () => clearItem(id)}>
            &#10005;
        </div>
    </div>
)};

const mapDispatchToProps = dispatch => ({
    clearItem: itemId => dispatch(removeItem(itemId)),
    addItem: item => dispatch(addItem(item)),
    decItem: itemId => dispatch(decreaseQuantity(itemId))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);