import React from 'react';
import './App.scss';
import Header from './Header/Header';
import ViewBody from './ViewBody/ViewBody';
import QuestionScreen from './QuestionScreen/QuestionScreen';
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Header />  
      <Router>        
        <ViewBody path="/" />     
        <QuestionScreen path="/question/:id" />
      </Router>        
    </div>
  );
}

export default App;
