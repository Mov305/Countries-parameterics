import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import List from './List';
import Skeleton from '../SkeletonLoad';

function Countries() {
  const [page, setPage] = useState(1);
  const numberOfPages = useSelector((state) => Math.ceil(state.countries.length / 12));
  const countries = useSelector((state) => state.countries.slice((page - 1) * 12, page * 12));

  useEffect(() => {
    setPage(1);
  }, [numberOfPages]);

  const handleNext = () => {
    if (page < numberOfPages) {
      setPage(page + 1);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  if (countries.length === 0) {
    return (
      <div>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    );
  }

  return (
    <div>
      <List countries={countries} />
      <div className="flex justify-center">
        <div className="inline-flex items-center justify-center gap-3 bg-slate-400/20 rounded-xl my-10">
          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded hover:bg-pink-400/50 transition-colors  "
            onClick={handlePrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <p className="text-xs">
            {page}
            <span className="mx-0.25">/</span>
            {numberOfPages}
          </p>

          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded hover:bg-pink-400/50 transition-colors"
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Countries;
