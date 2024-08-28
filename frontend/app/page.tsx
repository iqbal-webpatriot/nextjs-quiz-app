"use client"
import { useState, useEffect, ReactNode } from "react";
import { SAMPLE_TOPICS } from "@/data/question";
import Link from "next/link";
import RoleSelection from "@/components/ChoiceSelector";
import Pagination from "@/components/Pagination";
import { tree } from "next/dist/build/templates/app-page";
import TopicList from "@/components/TopicList";
import { useAppDispatch, useAppSelector } from "@/Redux/App/hooks";
import { updateSelectedRole } from "@/Redux/Features/commonSlice";
const Roles=[
  {
    id: 1,
    title: "Frontend Developer",
    description: "Start the quiz to test your UI/UX skills!"
  },
  {
    id: 2,
    title: "Backend Developer",
    description: "Begin the quiz to challenge your server-side expertise!"
  },
  {
    id: 3,
    title: "Full Stack Developer",
    description: "Take the quiz to showcase your all-round development skills!"
  }
]
export const STEP_WISE_COMPONENTS = [
  {
    component: (props: any) => {
       const dispatch=useAppDispatch();
       const {selectedRole}=useAppSelector((store)=>store.commonStore)
      return (
        <RoleSelection
        onOptionSelect={(role) => dispatch(updateSelectedRole(role))}
        label="Choose Role"
        options={Roles}
        listIcon={true}
        selectedOption={selectedRole}
        {...props}
        />
      )
    },
  },
  {
    component: (props: any) => (
      <TopicList  topics={SAMPLE_TOPICS} {...props}  />
    ),
  },
];

export default function Home() {
   const [steps,setSteps]=useState(0)
  const [loading, setLoading] = useState(true);
   

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);
  console.log("steps",steps)
   const StepBlockComp = STEP_WISE_COMPONENTS[steps].component
  return (
    <>
      <div className=" w-full  grid place-content-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        {/* <RoleSelection onOptionSelect={(role)=>console.log("all options on home page",role)} label="Choose Role" options={Roles} listIcon/>
        <TopicList/> */}
         <div className="container">
         <StepBlockComp/>
        <div className="w-full  mt-10">
        <Pagination onNext={()=>{
           if(steps===STEP_WISE_COMPONENTS.length-1)return
          setSteps((prev)=>prev+1)
          
        }} onPrevious={()=>{
          if(steps>=1){
            setSteps((prev)=>prev-1)
           }
        }} hasNext={steps <=STEP_WISE_COMPONENTS.length-1} hasPrevious={steps>=STEP_WISE_COMPONENTS.length-1}/>
        </div>
         </div>
      </div>
    </>
  );
}
