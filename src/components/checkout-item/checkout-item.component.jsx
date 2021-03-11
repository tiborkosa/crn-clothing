import React from 'react';
import { connect } from 'react-redux';

import {
    decreaseQuantity,
    addItem,
    removeItem
} from '../../redux/cart/cart.action';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './checkout-item.styles';

const CheckoutItem = ({ item, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = item;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(item.id)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(item)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(item.id)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
    clearItem: itemId => dispatch(removeItem(itemId)),
    addItem: item => dispatch(addItem(item)),
    removeItem: itemId => dispatch(decreaseQuantity(itemId))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);