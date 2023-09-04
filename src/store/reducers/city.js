import { createReducer } from "@reduxjs/toolkit";
import cityActions from "../actions/city";

const initialState = {
    city: [
        {

            ciudad: "",
            imagen: "",
            pais: "",
            itineraries: [],

        }
    ]
}

const cityReducer = createReducer(initialState, (builder) => {

    return builder
    .addCase(cityActions.get_city.fulfilled, (state, action) => {
        const  newState = {...state, city: action.payload.city}
        return newState
    })

})

export default cityReducer