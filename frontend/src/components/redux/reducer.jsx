import {createSlice} from "@reduxjs/toolkit"

export const initialState={
    isLoader:false
}


export const authslice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        loader:(state,action)=>{
            state.isLoader=action.payload
        }

    }
})

export const{
loader,
}=authslice.actions

export default authslice.reducer