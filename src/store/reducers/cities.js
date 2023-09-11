import { createReducer } from "@reduxjs/toolkit";
import citiesActions from "../actions/cities";

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

const citiesReducer = createReducer(initialState, (builder) => {

    return builder
    .addCase(citiesActions.get_cities.fulfilled, (state, action) => {
        const  newState = {...state, cities: action.payload.cities}
        return newState
    })

})

export default citiesReducer