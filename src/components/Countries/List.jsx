import React from 'react';
import Card from './Card';
import Filter from './filter';

function List({ countries }) {
  return (
    <section className="bg-gray-100/10">
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="items-end justify-between flex">
          <div className="max-w-xl">
            <h2 className="text-xl font-bold tracking-tight sm:text-3xl dark:text-slate-200">
              Mov World
            </h2>
          </div>
          <Filter />
        </div>
        <div className="mt-8 grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3">
          {countries &&
            countries.map((country) => (
              <Card key={country.idd.suffixes[0] + country.name.official} country={country} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default List;
