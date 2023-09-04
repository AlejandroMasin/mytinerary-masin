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

const get_city_by_id = createAsyncThunk('get_city_by_id', async (id) => {

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

// const get_city_by_id = createAsyncThunk('get_city_by_id', async (id) => {
//     try {
//         // Realiza una solicitud para obtener la ciudad con el ID especificado
//         const city = await axios.get(`http://localhost:4000/api/city/${id}`)
//             .then((response) => {
//                 return response.data;
//             });

//         return {
//             city: city
//         };
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         throw error; // Puedes propagar el error para manejarlo en otro lugar si es necesario
//     }
// });

const citiesActions = { get_cities, get_city_by_id }

export default citiesActions