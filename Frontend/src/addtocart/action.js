import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const addToCart = createAsyncThunk('addToCart', async (data) => {
    console.log('addtocart data', data)
    try {
        const responce = await axios.post('http://localhost:8080/addtocart', data)
        return responce
    } catch (error) {
        console.log("error", error)
    }

})