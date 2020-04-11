import React from 'react';
import './App.scss';
import ESHeader from './ESHeader/ESHeader';
import ViewBody from './ViewBody/ViewBody';

function App() {
  console.log('loads', 1);

  return (
    <div className="App">
      <ESHeader />            
      <ViewBody />
    </div>
  );
}

export default App;
