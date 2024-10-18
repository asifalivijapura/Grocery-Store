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
    // console.log("data", data)
    try {
        const responce = await axios.get(`http://localhost:8080/api-grocery/${data?.id}`)
        return responce.data
    } catch (error) {
        console.log("error", error.message)
    }
})


export const registerData = createAsyncThunk('registerData', async (data) => {
    // console.log("Data in action login : ", data)
    try {
        const responce = await axios.post(`http://localhost:8080/registation`, data)
        console.log("responce in action login", responce)
        return responce
    } catch (error) {
        console.log("Error", error.message)
    }
})



export const loginData = createAsyncThunk('loginData', async (data) => {
    console.log("Data in action login : ", data)

    try {
        const responce = await axios.post(`http://localhost:8080/login`, data)
        return responce
    } catch (error) {
        console.log("Error", error.message)
    }
})