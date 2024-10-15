import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const popularProduct = createAsyncThunk('popularProduct', async () => {
    try {
        const responce = await axios.get('http://localhost:8080/api-grocery')
        // console.log("responce", responce)
        return responce
    } catch (error) {
        console.log("error", error.message)
    }
})


export const productDetails = createAsyncThunk('productDetails', async (data) => {
    console.log("data", data)
    try {
        const responce = await axios.get(`http://localhost:8080/api-grocery/${data?.id}`)
        return responce.data
    } catch (error) {
        console.log("error", error.message)
    }
})