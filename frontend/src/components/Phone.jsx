import React from 'react'

export default function PhoneIcon() {
  return (
    <div className="w-4 h-6  flex items-center justify-center rounded-lg">
      <div className="w-4 h-6 bg-white rounded-xs relative">
        {/* Home bar */}
        <div className="w-1.5 h-0.5 bg-primary rounded-full absolute bottom-0.5 left-1/2 -translate-x-1/2"></div>
      </div>
    </div>
  );
}
