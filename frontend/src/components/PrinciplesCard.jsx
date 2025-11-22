import React from 'react';

const Principle = ({ principle, bg, textColor }) => {
  return (
    <div
      className={`group h-125 sm:h-150 aspect-9/12 rounded-4xl p-6 m-2 flex flex-col items-center justify-start text-start overflow-y-clip ${bg}`}
    >
      <h2 className={`text-start w-full font-montserrat font-semibold text-3xl mb-4 ${textColor}`}>{principle.title}</h2>
      <p className={`text-start w-full font-montserrat text-sm ${textColor}`}>{principle.description}</p>
    </div>
  );
};

export default Principle;
