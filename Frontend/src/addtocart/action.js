import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const addToCart = createAsyncThunk('addToCart', async (data) => {
    console.log('data', data)
    try {
        let formData = new FormData()
        formData.append('userId', data?.userId)
        formData.append('productId', data?.productId)
        formData.append('quantity', data?.quentity)

        const responce = await axios.post('http://localhost:8080/addtocart', formData)
        return responce
    } catch (error) {
        console.log("error", error)
    }

})