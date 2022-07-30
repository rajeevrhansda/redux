import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

export const updateUser2 = createAsyncThunk("user/update", async (user) => {
    const res = await axios.post("http://localhost:8800/api/user/1/update", user);
    return res.data;
});
export const deleteUser = createAsyncThunk("user/update", async (user) => {
    const res = await axios.post("http://localhost:8800/api/user/1/update", user);
    return res.data;
});


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
    reducers: {},
    extraReducers: {
        [updateUser2.pending]: (state) => {
            state.pending = true;
            state.error = false;
        },
        [updateUser2.fulfilled]: (state, action) => {
            state.pending = true;
            state.userInfo = action.payload;
        },
        [updateUser2.rejected]: (state) => {
            state.pending = null;
            state.error = true;
        },
    },
    extraReducers: {
        [deleteUser.pending]: (state) => {
            state.pending = true;
            state.error = false;
        },
        [deleteUser.fulfilled]: (state, action) => {
            state.pending = false;
            state.userInfo = action.payload;
        },
        [deleteUser.rejected]: (state) => {
            state.pending = null;
            state.error = true;
        },
    },
});
export const { updateStart, updateSuccess, updateError } = userSlices.actions;
export default userSlices.reducer;