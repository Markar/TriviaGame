import React, { useEffect } from 'react';
import './ESHeader.scss';
import CardGrid from '../CardGrid/CardGrid';
import { Navbar, Button, Form, FormControl } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import {  
  filterCards, selectCards, selectPage, fetchCards
} from '../cardSlice';

function ESHeader(props) {    
  const dispatch = useDispatch();      
  
  function handleChange(e) {
    dispatch(filterCards('raise'));
  }      

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Elder Scrolls Card Viewer </Navbar.Brand>
        <Form inline>
          <FormControl type="text" placeholder="Search by name" className="mr-sm-2" onChange={handleChange} />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar>
    </>
  );
}

export default ESHeader;