import { createReducer } from "@reduxjs/toolkit";
import clientsActions from "../actions/clients";

const initialState = {
    clients: [
        {
            nombre: "",
            edad: 0,
            correo: "",
            imagen: ""
        }
    ]
}

const clientsReducer = createReducer(initialState, (builder) => {

    return builder
    .addCase(clientsActions.get_clients.fulfilled, (state, action) => {
        const  newState = {...state, clients: action.payload.clients}
        return newState
    })

})

export default clientsReducer