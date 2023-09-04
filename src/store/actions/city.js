import { createAction } from "@reduxjs/toolkit";

const add_city = createAction('add_city', (array) => {

    return {
        payload: {
            city: array
        }
    }
} )

const cityActions = {add_city}

export default {cityActions, add_city}