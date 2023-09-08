import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const get_cities = createAsyncThunk('get_cities', async () => {

    try {
        const cities = await axios.get('http://localhost:4000/api/cities/')
            .then((response) => {
                return response.data
            })

        return {
            cities: cities
        }

    } catch (error) {
        console.error('Error fetching data:', error);
    }

})


const citiesActions = { get_cities }

export default citiesActions