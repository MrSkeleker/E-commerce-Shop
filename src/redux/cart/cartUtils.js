export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItemToAdd.id === cartItem.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);
    if (existingCartItem.quantity === 1) {
        return clearItemFromCart(cartItems, existingCartItem)
    }
    return cartItems.map(cartItem =>
        cartItemToRemove.id === cartItem.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    )
}

export const clearItemFromCart = (cartItems, cartItemToClear) => {
    return cartItems.filter(item => item.id !== cartItemToClear.id);
} 