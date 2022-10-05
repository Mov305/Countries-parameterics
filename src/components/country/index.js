import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoChevronBackOutline } from 'react-icons/io5';
import fetchCountries from '../../redux/countries/api';

import Skeleton from '../SkeletonLoad';

function Country() {
  const { name } = useParams();

  React.useEffect(() => {
    fetchCountries(`name/${name}`);
  }, [name]);

  const country = useSelector((state) => state.countries.find((country) => country.name.official === name));

  if (!country) {
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
      <div className="group relative block bg-black/90">
        <div className="text-white p-2 text-xl cursor-pointer transition hover:bg-slate-200/20 z-20  absolute rounded-br-lg">
          <Link to="/">
            <IoChevronBackOutline />
          </Link>
        </div>
        <img
          alt="Developer"
          src={country.flags.svg}
          className="absolute inset-0 h-full w-full object-contain opacity-75 transition-opacity group-hover:opacity-50"
        />
        <div className="relative p-8">
          <div className=" backdrop-blur-md rounded-xl bg-black/20 p-4 w-fit group-hover:backdrop-blur-0">
            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
              {country.name.official}
            </p>
            <p className="text-xl font-bold text-white">{country.continents.join(' ,')}</p>
          </div>

          <div className="mt-32">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">
                Week starts at
                {' '}
                {country.startOfWeek.toUpperCase()}
                {' '}
                and the area is
                {' '}
                {country.area}
                {' '}
                km²
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto border border-gray-200 dark:border-gray-700">
        <table className="min-w-full divide-y divide-gray-200 text-sm dark:divide-gray-700">
          <thead className="bg-gray-100/50 dark:bg-gray-800">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                {country.name.official}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                Flag
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                {country.flag}
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                Continent
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                {country.continents.join(', ')}
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                Area
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                {country.area}
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                Population
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                {country.population}
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                Week start
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                {country.startOfWeek}
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                TimeZone
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                {country.timezones.join(', ')}
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                Language
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                {country.languages[Object.keys(country.languages)[0]]}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Country;
