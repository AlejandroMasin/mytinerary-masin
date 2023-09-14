import { configureStore } from "@reduxjs/toolkit";
import clientsReducer from "./reducers/clients";
import citiesReducer from "./reducers/cities";
import cityReducer from "./reducers/city";
import { userReducer } from "./reducers/userReducers";
// import cityReducer from "./reducers/city";



export const store = configureStore({
    reducer: {
        clientsReducer: clientsReducer,
        citiesReducer: citiesReducer,
        cityReducer: cityReducer,
        user: userReducer
    }
})