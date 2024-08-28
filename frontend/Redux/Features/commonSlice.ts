

import { ItemOption } from '@/components/ChoiceSelector'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type intitalStateProps={
    selectedRole:ItemOption[] | undefined
}

const initialState:intitalStateProps={
    selectedRole:undefined
}

export const commonSlice=createSlice({
    name:'commonSlice',
    initialState,
    reducers:{
        updateSelectedRole:(state,action:PayloadAction<ItemOption[] | undefined>)=>{
          state.selectedRole=action.payload 
        },
       
    }
})
export const {updateSelectedRole}=commonSlice.actions
export default commonSlice.reducer