//create cart slice
import { CartItem } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

export interface CartState {
    cartItems: CartItem[];
}
//initial state
const initialState: CartState = {
    cartItems: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        //list of reducer actions here
        addToCart(state, action){
            state.cartItems.push(action.payload);
        }
    },
});

export default cartSlice.reducer;
export const {addToCart} = cartSlice.actions;
