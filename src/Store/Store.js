import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./Slice/Cartslice";
import CartSliceUi from "./Slice/CartsliceUi";

const store = configureStore({
    reducer:{
        cart: cartslice.reducer,
        cartUi: CartSliceUi.reducer,
    }
})

export default store