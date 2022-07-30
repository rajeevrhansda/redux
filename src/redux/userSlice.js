import { createSlice } from '@reduxjs/toolkit'

export const userSlices = createSlice({
    name: "user",
    initialState: {
        userInfo: {
            name: "Rajeev",
            email: "rajeev@gmail.com"
        },
        pending: null,
        error: false,
    },
    reducers: {
        updateStart: (state)=>{
            state.pending = true;
        },
        updateSuccess: (state, action)=>{
            state.pending = false;
            state.userInfo = action.payload;
        },
        updateError: (state)=>{
            state.pending = false;
            state.error = true;
        },
    },
});
export const { updateStart, updateSuccess, updateError } = userSlices.actions;
export default userSlices.reducer;