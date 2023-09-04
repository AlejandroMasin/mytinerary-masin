import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const get_clients = createAsyncThunk('get_clients', async () => {

    try {
        const clients = await axios.get('/usuarios.json')
            .then( (response) => {
                
                return response.data
            })

        return {

            clients: clients

        }

    } catch (error) {
        console.error('Error al cargar datos:', error);
    }


})

const clientsActions = { get_clients }

export default clientsActions