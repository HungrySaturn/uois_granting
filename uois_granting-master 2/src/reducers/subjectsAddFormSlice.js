import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = false;

export const subjectsAddFormSlice = createSlice({
    name: "subjectsAddForm",
    initialState: initialStateValue,
    reducers: {
        changeFormState: (state) => {
            return !state
        },
    },
})  

export const { changeFormState } = subjectsAddFormSlice.actions

export default subjectsAddFormSlice.reducer
