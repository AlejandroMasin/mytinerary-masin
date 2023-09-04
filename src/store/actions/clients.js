import { createAction } from "@reduxjs/toolkit";

const add_clients = createAction('add_clients', (array) => {

    return {
        payload: {
            clients: array
        }
    }
} )

const clientsActions = {add_clients}

export default clientsActions