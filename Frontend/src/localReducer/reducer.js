import { createSlice } from "@reduxjs/toolkit";


const localCheckData = createSlice({
    name: 'local',
    initialState: {
        dataAvailable: false,
    },

    reducers: {
        checkLocalStorageData: (state) => {
            const data = localStorage.getItem('userId');
            // console.log("Data in local", data)
            state.dataAvailable = data ? true : false;
        },
    },
    extraReducers: () => {}
})

export const { checkLocalStorageData } = localCheckData.actions;

export default localCheckData.reducer;