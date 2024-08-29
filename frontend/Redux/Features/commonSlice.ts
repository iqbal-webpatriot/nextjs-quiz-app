

import { ItemOption } from '@/components/ChoiceSelector'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type intitalStateProps={
    selectedRole:ItemOption[] | undefined,
    selectedTopics:ItemOption[] | undefined,
    selectedExperience:ItemOption[] | undefined,
    quizData: {}[]
}

const initialState:intitalStateProps={
    selectedRole:undefined,
    selectedExperience:undefined,
    selectedTopics:undefined,
    quizData:[]
}

export const commonSlice=createSlice({
    name:'commonSlice',
    initialState,
    reducers:{
        updateSelectedRole:(state,action:PayloadAction<ItemOption[] | undefined>)=>{
          state.selectedRole=action.payload 
        },
        updateSelectedTopics:(state,action:PayloadAction<ItemOption[] | undefined>)=>{
            state.selectedTopics=action.payload 
          },
          updateSelectedExperience:(state,action:PayloadAction<ItemOption[] | undefined>)=>{
            state.selectedExperience=action.payload 
          },
       
    }
})
export const {updateSelectedRole,updateSelectedExperience,updateSelectedTopics}=commonSlice.actions
export default commonSlice.reducer