import React from 'react';

const Benefit = ({ benefit, bg, textColor }) => {
  return (
    <div
      className={`group w-full aspect-square rounded-2xl p-6 flex flex-col items-center justify-start text-start overflow-y-clip ${bg}`}
    >
      <h2 className={`text-start w-full font-montserrat font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 ${textColor}`}>{benefit.title}</h2>
      <p className={`text-start w-full font-montserrat text-xs sm:text-base ${textColor}`}>{benefit.description}</p>
    </div>
  );
};

export default Benefit;
