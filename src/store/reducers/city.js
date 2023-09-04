import { createReducer } from "@reduxjs/toolkit";
import citiesActions from "../actions/city";

const initialState = {
    cities: [
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
    .addCase(citiesActions.add_city, (state, action) => {
        const  newState = {...state, cities: action.payload.cities}
        return newState
    })

})

export default {cityReducer}