import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const get_city = createAsyncThunk('get_city', async (id) => {

    try {
        const city = await axios.get('http://localhost:4000/api/city/'+id)
            .then((response) => {
                return response.data
            })

        return {
            city: city
        }

    } catch (error) {
        console.error('Error fetching data:', error);
    }

})

const resetCity = createAction('resetCity', () => {
    return  {
        payload: {}
    }
})

const cityActions = { get_city, resetCity}

export default cityActions