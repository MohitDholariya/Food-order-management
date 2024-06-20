import { createSlice } from "@reduxjs/toolkit";
// import { current } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalAmount: 0
}


const cartslice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            // console.log(action); 
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newItem.id)
            // console.log(current(state.cartItems));
            state.totalQuantity++;

            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    title: newItem.title,
                    image01: newItem.image01,
                    price: newItem.price,
                    quantity: 1,
                    totalprice: newItem.price
                })
            }
            else {
                existingItem.quantity++;
                existingItem.totalprice = Number(existingItem.totalprice) + Number(existingItem.price)
            }
            // console.log(current(state.cartItems));
            state.totalAmount = state.cartItems.reduce((total,item) => total + (Number(item.price) * Number(item.quantity)),0)
        },
        removeItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newItem.id)

            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.cartItems = state.cartItems.filter((item) => item.id !== newItem.id)
            }
            else {
                existingItem.quantity--;
                existingItem.totalprice = Number(existingItem.totalprice) - Number(existingItem.price)
            }

            state.totalAmount = state.cartItems.reduce((total,item) => total + (Number(item.price) * Number(item.quantity)),0)
        },
        deleteItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newItem.id)

            if(existingItem){
                state.cartItems = state.cartItems.filter((item) => item.id !== newItem.id)
                state.totalQuantity = state.totalQuantity - existingItem.quantity
            }
            state.totalAmount = state.cartItems.reduce((total,item) => total + (Number(item.price) * Number(item.quantity)),0)
        },
    }
})

export const cartAction = cartslice.actions
export default cartslice;

