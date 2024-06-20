import { createSlice } from "@reduxjs/toolkit";

const CartSliceUi = createSlice({
    name:'cartUi',
    initialState: {isCartVisible: false},
    reducers:{
        toggle(state){
            state.isCartVisible = !state.isCartVisible
        }
    }
})

export const CartActionUi = CartSliceUi.actions;
export default CartSliceUi;