import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


export const postDataFromData = createAsyncThunk('postDataFromData', async (Data) => {
    // console.log("Data", Data)
    try {
        const responce = await axios.post('http://localhost:8080/api-grocery', Data)
        return responce
    } catch (error) {
        console.log("error", error.message)
    }
})


export const deleteFromData = createAsyncThunk('deleteFromData', async (Data) => {
    try {
        const responce = await axios.delete(`http://localhost:8080/api-grocery/${Data?._id}`)
        return responce
    } catch (error) {
        console.log("error", error)
    }
})