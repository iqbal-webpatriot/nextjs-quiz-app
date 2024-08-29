"use client";
import { useEffect, useState } from "react";
export type ItemOption = {
  id: number;
  title: string;
  description?: string;
  icon?: string;
};

interface ChoiceSelectorProps {
  onOptionSelect: (option: ItemOption[]) => void;
  options: ItemOption[]; // Dynamic options
  selectedOption?:ItemOption[]  | undefined
  label: string; // Label for the selector
  description?:string;
  isMultiple?: boolean;
  listIcon?:boolean
}
function SkeletonPlaceholder() {
  return (
    <div className="block p-6 bg-gray-300 animate-pulse text-gray-300 rounded-lg shadow-lg">
      <div className="w-[20rem] h-4 bg-gray-400 rounded mb-4"></div>
      <div className="h-4 bg-gray-400 rounded mb-2"></div>
      <div className="h-4 bg-gray-400 rounded"></div>
    </div>
  );
}

export default function ChoiceSelector({
  onOptionSelect,
  options,
  label,
  description,
  isMultiple = false,
  listIcon=false,
  selectedOption=undefined
}: ChoiceSelectorProps) {
  const [currentChoice, setCurrentChoise] = useState(selectedOption)
  const handlerChoseSelection = (isMulti = isMultiple, option: ItemOption) => {
    if (isMulti && currentChoice) {
      // Toggle selection for multiple choice
      if (currentChoice.find((opt) => opt.id === option.id)) {
        const updatedSelection = currentChoice.filter(
          (opt) => opt.id !== option.id
        );
        setCurrentChoise(updatedSelection);
      } else {
        const updatedSelection = [...currentChoice, option];
        setCurrentChoise(updatedSelection);
      }
    } else {
      setCurrentChoise([option]);
    }
  };
  const [loading, setLoading] = useState(true);
   

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (currentChoice) {
      onOptionSelect(currentChoice);
    }
  }, [currentChoice]);

  return (
    <div className="grid place-items-center p-8">
      <div className="text-center mb-6">
         
            <h1 className="text-5xl font-extrabold mb-4 ">{label}</h1>
            {description && <p className="text-xl">{description}</p>}
         
        </div>
      <ul className="grid w-full h-auto gap-6 md:grid-cols-3 place-content-center place-items-center">
        {loading && selectedOption===undefined
            ? Array(3) // Adjust the number based on how many skeletons you want
                .fill(0)
                .map((_, index) => <SkeletonPlaceholder key={index} />) :options.map((option, index) => {
          return (
            <li
              onClick={(e) => {
                e.stopPropagation();

                handlerChoseSelection(isMultiple, option);
              }}
              key={option.id}
              className="w-[20rem] h-[8rem] hover:scale-105 transform transition-transform duration-300 "
            >
              <input
                type="checkbox"
                id={`option-${option.id}`}
                className="hidden peer"
                checked={currentChoice?.some((cur) => cur.id === option.id)}
                onChange={(e) => {
                  e.preventDefault();
                }}
              />
              <label
                htmlFor={`option-${option}`}
                className={`inline-flex items-center justify-center w-full h-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-pink-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 ${
                  currentChoice &&
                  currentChoice.some((opt) => opt.id === option.id)
                    ? "bg-blue-600 text-white"
                    : ""
                }`}
              >
                <div className="grid place-items-center text-center">
                  {listIcon && <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16l4-4m0 0l-4-4m4 4H7m6 4l-4-4m0 0l4-4m-4 4h12"
                    />
                  </svg>}

                  <div className="w-full text-lg font-semibold">
                    {option.title}
                  </div>
                  <div className="w-full text-sm">{option?.description}</div>
                </div>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
