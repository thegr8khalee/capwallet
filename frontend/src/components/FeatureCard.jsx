import React from 'react';

const FeatureCard = ({ feature, bg, textColor, img }) => {
  return (
    <div
      className={`h-125 sm:h-150 aspect-9/12 rounded-4xl p-6 m-2 flex flex-col items-center justify-start text-start overflow-y-clip ${bg}`}
    >
      <h2 className={`text-start w-full font-montserrat font-semibold text-3xl mb-4 ${textColor}`}>{feature}</h2>
      <img src={img} alt="" className='mt-12 rounded-4xl w-80' />
    </div>
  );
};

export default FeatureCard;
