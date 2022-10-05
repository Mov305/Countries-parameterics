import React from 'react';
import {
  GiEarthAfricaEurope,
  GiEarthAsiaOceania,
  GiSouthAmerica,
  GiEarthAmerica,
  GiAustralia,
} from 'react-icons/gi';
import { FaGlobeEurope } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import fetchCountries from '../../redux/countries/api';

const data = [
  {
    name: 'Africa',
    Icon: GiEarthAfricaEurope,
  },
  {
    name: 'Asia',
    Icon: GiEarthAsiaOceania,
  },
  {
    name: 'Europe',
    Icon: FaGlobeEurope,
  },
  {
    name: 'North America',
    Icon: GiEarthAmerica,
  },
  {
    name: 'South America',
    Icon: GiSouthAmerica,
  },
  {
    name: 'Australia',
    Icon: GiAustralia,
  },
];

function Filter() {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleFilter = (region) => {
    dispatch(fetchCountries(`subregion/${region}`));
  };

  return (
    <div className="inline-flex items-stretch rounded-md border bg-white/50 backdrop-blur-sm z-10 dark:border-gray-800 dark:bg-gray-900">
      <button
        type="button"
        onClick={handleOpen}
        className="rounded-l-md px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200"
      >
        Filter
      </button>
      <div className={`relative `}>
        <button
          type="button"
          onClick={handleOpen}
          className="inline-flex h-full items-center justify-center rounded-r-md border-l border-gray-100 px-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={`absolute right-0 z-10 mt-4 w-56 origin-top-right rounded-md border border-gray-100 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900 duration-300 transition ${
            open ? 'opacity-100' : 'opacity-0 w-0 h-0'
          }`}
          role="menu"
        >
          <div className="flow-root py-2">
            <div className="-my-2 divide-y divide-gray-100 dark:divide-gray-800">
              <div className="p-2">
                <strong className="block p-2 text-xs font-medium uppercase text-gray-400 dark:text-gray-500">
                  Continents
                </strong>
                <ul>
                  {data.map((item) => (
                    <li
                      key={item.name}
                      onClick={() => handleFilter(item.name)}
                      className="flex hover:cursor-pointer justify-between rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                      role="menuitem"
                    >
                      <span>{item.name}</span>
                      <item.Icon className="inline-block ml-2" />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-2">
                <button
                  type="submit"
                  className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50 dark:text-red-500 dark:hover:bg-red-600/10"
                  role="menuitem"
                  onClick={() => dispatch(fetchCountries())}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Delete filter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
