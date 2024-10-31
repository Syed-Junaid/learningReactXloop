// src/DateComponent.js
import React from 'react';

function DateComponent() {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div>
      <h2>Date Component</h2>
      <p>{currentDate}</p>
    </div>
  );
}

export default DateComponent;
