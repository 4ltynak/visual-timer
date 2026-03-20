import React from 'react';
import ClockDisplay from './clock-components/ClockDisplay';

export default function ClockSection () {
    return (
        <>
        <div className="col-span-12 border-t pt-4">
      <div className="bg-gray-100 p-4 rounded">
        <h2>Input Area</h2>
      </div>
    </div>

  {/* Row 3: Clock Area (Stacked) */}
  <div className="col-span-12">
    <div className="bg-gray-50 p-4 rounded">
      <h1>Area</h1>
    </div>
  </div>
        </>
    )
}