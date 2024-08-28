"use client";
import { useEffect, useState } from "react";
type ItemOption={
   id:number;
   title:string;
   description?:string;
   icon?:string
}
 
interface ChoiceSelectorProps {
  onOptionSelect: (option: ItemOption[]) => void;
  options: ItemOption[]; // Dynamic options
  label: string;     // Label for the selector
  isMultiple?:boolean
}

export default function ChoiceSelector({
  onOptionSelect,
  options,
  label,
  isMultiple=false
}: ChoiceSelectorProps) {
  const [currentChoice,setCurrentChoise]=useState<ItemOption[] | undefined>(undefined);
   const handlerChoseSelection=(isMulti=isMultiple,option:ItemOption)=>{
    
    if (isMulti && currentChoice) {
      // Toggle selection for multiple choice
      if( currentChoice.find(opt => opt.id === option.id)) {
        const updatedSelection = currentChoice.filter(opt => opt.id !== option.id);
         setCurrentChoise(updatedSelection)
      } else {
       const  updatedSelection = [...currentChoice, option];
       setCurrentChoise(updatedSelection)
      }
    }  else  {
      setCurrentChoise([option])
    }
   }

  useEffect(()=>{
     if(currentChoice){
      onOptionSelect(currentChoice)
     }

  },[currentChoice])
  
   
  return (
    <div className="grid place-items-center">
      <h3 className="text-5xl font-extrabold mb-10">
        {label}
      </h3>
      <ul className="grid w-full gap-6 md:grid-cols-3 place-content-center place-items-center">
        {options.map((option,index) => {
          return (
            <li onClick={(e)=>{
              e.stopPropagation();
              
              handlerChoseSelection(isMultiple, option)
            }} key={option.id} className="w-[20rem] h-[8rem]">
              <input
                type="checkbox"
                id={`option-${option.id}`}
                className="hidden peer"
                checked={currentChoice?.some((cur)=>cur.id===option.id)}
                onChange={(e)=>{e.preventDefault()}}
              />
              <label
                htmlFor={`option-${option}`}
                className={`inline-flex items-center justify-center w-full h-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-pink-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 ${
                   currentChoice &&  currentChoice.some(opt => opt.id === option.id) ? "bg-blue-600 text-white" : ""
                }`}
              >
                <div className="grid place-items-center text-center">
                  <svg
                    className="mb-2 w-7 h-7 text-sky-500"
                    fill="currentColor"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.2-15.6-8.5-47.1-2.4-83.4 14.5-95.1zm-40.6 49.4c4.5-17.5 12.2-31.5 23.3-37.9 4.1-2.3 8.8-3.5 13.6-3.5 6.5 0 12.7 3.4 17.6 10.4 5.7 8.7 8.1 24.8 6.5 44.8-.3 3.2-.7 6.5-1.2 9.8-13.1-1.7-26.3-3.4-39.2-5.5-4.7-14.4-8.9-29.8-12.4-45.1-2.7-12.7-5.5-25.4-8.4-37.8 1.6-5.6 3.4-11.2 5.6-16.7 6.7-21.1 15.4-34.8 25.4-41.8 4.2-3.6 9.1-5.8 14.3-5.8 6.6 0 12.4 4.2 17.1 10.5 7.5 10.3 12.2 28.2 14.6 49.3 1.5 13.6 2.7 27.2 3.6 41 1.7-1.1 3.4-2.1 5.3-3.1 13.4-8.7 28.5-15.4 44.5-21.1 2.3-1 4.5-2 6.7-3.2-1.4 4.3-2.9 8.7-4.6 13.1-9.4 25.3-23.1 47.3-41.6 64.3-4.4 3.6-9.3 6.7-14.5 8.9-12.6 4.1-24.8 6.8-36.4 8.7-2.3-.5-4.6-1-6.9-1.6-14.4-3.6-27.7-8.7-40.7-15-5.4-2.5-10.8-5.1-16-8.1-1.5-1.1-3.1-2.3-4.5-3.5-4.7-3.4-9.3-7.2-13.6-11.4-9.8-8.3-18.9-17.4-27.2-27.8z"/>
                  </svg>
                  <div className="w-full text-lg font-semibold">{option.title}</div>
                  <div className="w-full text-sm">{option?.description}</div>
                </div>
              </label>
            </li>
          )
        })}
      </ul>
    </div>
  );
}
