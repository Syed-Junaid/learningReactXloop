// src/App.js
import React from 'react';
import ImageComponent from './ImageComponent';
import DateComponent from './DateComponent';
import NameComponent from './NameComponent';

function App() {
  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <h1>7.1 Create React App</h1>
      <ImageComponent />
      <DateComponent />
      <NameComponent />
    </div>
  );
}

export default App;
