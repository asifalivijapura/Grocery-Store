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

export const viewCartDetails = createAsyncThunk('viewCartDetails', async (userId) => {
    console.log("viewCartDetails", userId)
    try {
        const responce = await axios.post('http://localhost:8080/viewcart', userId)
        return responce
    } catch (error) {
        console.log("error", error.message)
    }
})