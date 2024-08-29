import React from 'react';

interface PaginationProps {
  onNext: () => void;       // Callback function for "Next" button
  onPrevious: () => void;   // Callback function for "Previous" button
  hasNext: boolean;         // Indicates if there is a next page
  hasPrevious: boolean;     // Indicates if there is a previous page
  enableStartTestBtn?:boolean
}

const Pagination: React.FC<PaginationProps> = ({
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
  enableStartTestBtn=false
}) => {
  return (
    <div className="w-full flex justify-between  items-center  gap-4 mt-4">
      <button
        onClick={onPrevious}
        className={`px-10 py-3  rounded-md bg-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${!hasPrevious || enableStartTestBtn ? 'invisible' : 'visible cursor-pointer'}`}
      >
        Go Back
      </button>
    {enableStartTestBtn?  <button
        onClick={onNext}
        disabled={!hasNext}
        className={`px-10 py-3 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm  text-center me-2 mb-2'}`}
      >
        Start Test
      </button>:  <button
        onClick={onNext}
        disabled={!hasNext}
        className={`px-10 py-3  rounded-md bg-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${!hasNext ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      >
        Next Step
      </button>}
    </div>
  );
};

export default Pagination;
