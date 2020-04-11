import React, { useEffect } from 'react';
import './ESHeader.scss';
import { Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {  
  filterCards
} from '../cardSlice';

function ESHeader(props) {    
  const dispatch = useDispatch();      

  function handleChange(e) {
    console.log('event', e.target.value);
    dispatch(filterCards(e.target.value));
  }      

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Elder Scrolls Card Viewer </Navbar.Brand>
        <input type="text" placeholder="Search by name" className="mr-sm-2" onChange={handleChange} />        
      </Navbar>
    </>
  );
}

export default ESHeader;