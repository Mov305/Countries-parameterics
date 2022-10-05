import React from 'react';
import { Link } from 'react-router-dom';
function Card({ country }) {
  const area = country.area;
  const weekStart = country.startOfWeek.toUpperCase();
  return (
    <Link to={`/country/${country.name.official}`}>
      <div className="group relative block bg-black/90">
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
                Week starts at {weekStart} and the area is {area}
                km²
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
