

import { ItemOption } from '@/components/ChoiceSelector'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type intitalStateProps={
    selectedRole:ItemOption[] | undefined;
    selectedTopics:ItemOption[] | undefined;
    selectedExperience:ItemOption[] | undefined;
    totalQuestions:number;
    correctAnswers:number;
    quizData: {}[];
}

const initialState:intitalStateProps={
    selectedRole:undefined,
    selectedExperience:undefined,
    selectedTopics:undefined,
     totalQuestions:0,
     correctAnswers:0,
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
          resetStepsData:(state)=>{
            state.selectedExperience=undefined;
            state.selectedRole=undefined;
            state.selectedTopics=undefined
            state.totalQuestions=0
            state.correctAnswers=0
          },
          updateAnswers:(state)=>{
            state.correctAnswers+=1
          },
          updateTotalQuestion:(state,action:PayloadAction<number>)=>{
            state.totalQuestions=action.payload
          }
       
    }
})
export const {updateSelectedRole,updateSelectedExperience,updateSelectedTopics,resetStepsData,updateAnswers,updateTotalQuestion}=commonSlice.actions
export default commonSlice.reducer