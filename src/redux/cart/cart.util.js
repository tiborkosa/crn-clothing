export const addItemToCart = ( cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find( 
        cartItem => cartItem.id == cartItemToAdd.id);

    if(existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id == cartItemToAdd.id 
            ? { ...cartItem, quantity : cartItem.quantity + 1}
            :cartItem
        )
    } 

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
};

export const removeFromCart = ( cartItems, idToRemove ) => (
    cartItems.filter( item => item.id !== idToRemove)
);

export const decreaseQuantity = ( cartItems, idToDecrease ) => {
    const itemToDecrease = cartItems.find( cartItem => cartItem.id == idToDecrease);

    if( itemToDecrease.quantity === 1 ){
        return removeFromCart( cartItems, idToDecrease);
    } else {
        return cartItems.map(cartItem => 
            cartItem.id == idToDecrease 
                ? { ...cartItem, quantity : cartItem.quantity - 1}  
                :cartItem
        )
    }
}
