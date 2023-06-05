import {configureStore} from "@reduxjs/toolkit"
import {default as appReducer} from './app';

export const store = configureStore({
    reducer: {
        app: appReducer
    }
})