import React from 'react';
import './ESHeader.scss';
import { Navbar, Form, FormControl } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {  
  filterCards
} from '../cardSlice';

function ESHeader(props) {    
  const dispatch = useDispatch();      

  function handleChange(e) {
    dispatch(filterCards(e.target.value));
  }      

  return (
    <>
      <Navbar className = "justify-content-between" bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="">Elder Scrolls Card Viewer</Navbar.Brand>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleChange}/>
        </Form>
        {/* <input type="text" placeholder="Search by name" className="mr-sm-2" onChange={handleChange} />         */}
      </Navbar>
    </>
  );
}

export default ESHeader;