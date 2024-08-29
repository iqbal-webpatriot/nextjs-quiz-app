"use client";
import { useState, useEffect, ReactNode } from "react";
import {
  experienceLevels,
  getFilteredTechnologies,
  Roles,
  technologies,
} from "@/data/question";
import Link from "next/link";
import RoleSelection from "@/components/ChoiceSelector";
import Pagination from "@/components/Pagination";
import { tree } from "next/dist/build/templates/app-page";
import TopicList from "@/components/TopicList";
import { useAppDispatch, useAppSelector } from "@/Redux/App/hooks";
import {
  updateSelectedExperience,
  updateSelectedRole,
  updateSelectedTopics,
} from "@/Redux/Features/commonSlice";
import { useRouter } from "next/navigation";
export const STEP_WISE_COMPONENTS = [
  {
    component: (props: any) => {
      const dispatch = useAppDispatch();
      const { selectedRole } = useAppSelector((store) => store.commonStore);
      return (
        <RoleSelection
          onOptionSelect={(role) => {
           if(selectedRole && selectedRole[0].id===role[0].id){
            return
           }
          dispatch(updateSelectedRole(role))
          dispatch(updateSelectedTopics(undefined))
          }}
          label="Choose Role"
          description="Select your role to tailor the quiz to your expertise."
          options={Roles}
          listIcon={true}
          selectedOption={selectedRole}
          {...props}
        />
      );
    },
  },
  {
    component: (props: any) => {
      const dispatch = useAppDispatch();
      const { selectedTopics , selectedRole } = useAppSelector((store) => store.commonStore);
      let roleBaseTechnologies=undefined;
       if(selectedRole){
        const title= selectedRole[0].title;
         if(title==="Frontend Developer") {
           roleBaseTechnologies= getFilteredTechnologies("Frontend");
           
         }
         else if(title==="Backend Developer") {
          roleBaseTechnologies= getFilteredTechnologies("Backend");
          
        }
        else {

          roleBaseTechnologies= technologies
        }
       }
       console.log('roleBaseTechnologies',roleBaseTechnologies)
      return (
        <RoleSelection
          onOptionSelect={(role) => dispatch(updateSelectedTopics(role))}
          label="Choose Topics"
          description="Select topics to prepare your questions for the quiz."
          options={roleBaseTechnologies}
          isMultiple
          selectedOption={selectedTopics}
          {...props}
        />
      );
    },
  },
  {
    component: (props: any) => {
      const dispatch = useAppDispatch();
      const { selectedExperience } = useAppSelector(
        (store) => store.commonStore
      );
      return (
        <RoleSelection
          onOptionSelect={(role) => dispatch(updateSelectedExperience(role))}
          label="Choose Experience"
          description="Select your experience level to match the difficulty of the quiz."
          options={experienceLevels}
          selectedOption={selectedExperience}
          {...props}
        />
      );
    },
  },
];

export default function Home() {
  const router= useRouter();
  const [steps, setSteps] = useState(0);
  const StepBlockComp = STEP_WISE_COMPONENTS[steps].component;
  return (
    <>
      <div className=" w-full  grid place-content-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        {/* <RoleSelection onOptionSelect={(role)=>console.log("all options on home page",role)} label="Choose Role" options={Roles} listIcon/>
        <TopicList/> */}
        <div className="container">
          <StepBlockComp />
          <div className="w-full  mt-10">
            <Pagination
              onNext={() => {
                if (steps === STEP_WISE_COMPONENTS.length - 1) {
                 router.push('/test?topic=technology')
                };
                setSteps((prev) => prev + 1);
              }}
              onPrevious={() => {
                if (steps >= 1) {
                  setSteps((prev) => prev - 1);
                }
              }}
              hasNext={steps <= STEP_WISE_COMPONENTS.length - 1}
              hasPrevious={steps >0}
            />
          </div>
        </div>
      </div>
    </>
  );
}
