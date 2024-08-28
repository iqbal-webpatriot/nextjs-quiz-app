import React from 'react';

interface PaginationProps {
  onNext: () => void;       // Callback function for "Next" button
  onPrevious: () => void;   // Callback function for "Previous" button
  hasNext: boolean;         // Indicates if there is a next page
  hasPrevious: boolean;     // Indicates if there is a previous page
}

const Pagination: React.FC<PaginationProps> = ({
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
}) => {
  return (
    <div className="w-full flex justify-between  items-center  gap-4 mt-4">
      <button
        onClick={onPrevious}
        className={`px-10 py-3  rounded-md bg-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${!hasPrevious ? 'invisible' : 'visible cursor-pointer'}`}
      >
        Go Back
      </button>
      <button
        onClick={onNext}
        disabled={!hasNext}
        className={`px-10 py-3  rounded-md bg-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${!hasNext ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      >
        Next Step
      </button>
    </div>
  );
};

export default Pagination;
