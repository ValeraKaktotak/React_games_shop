import {configureStore} from "@reduxjs/toolkit";
import cartReducer from './Cart-reducer/Cart-reducer'
import gameReducer from "./Game-reducer/Game-reducer";

const store = configureStore({
    reducer:{
        cart: cartReducer,
        game: gameReducer
    }
})

export default store