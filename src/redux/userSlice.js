import {createSlice} from '@reduxjs/toolkit'

export const userSlices = createSlice({
    name: "user",
    initialState:{
        name: "Rajeev",
        email:"rajeev@gmail.com"
    },
    reducers:{
        update: (state, action)=>{
            state.name =  action.payload.name;
            state.email = action.payload.email;
        }
    }
});
export const {update} = userSlices.actions;
export default userSlices.reducer;