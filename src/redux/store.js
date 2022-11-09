import {configureStore} from "@reduxjs/toolkit";
import cartReducer from './Cart-reducer/Cart-reducer'

const store = configureStore({
    reducer:{
        cart: cartReducer
    }
})

export default store