import React from 'react';
import './Header.scss';
import { Navbar, Button } from 'react-bootstrap';
import { Link } from "@reach/router";
import { useDispatch } from 'react-redux';
import { nextPage } from '../gameSlice';

function Header() {     
  const dispatch = useDispatch();

  function goToNextPage() {    
    dispatch(nextPage());      
  }  

  return (
    <>
      <Navbar className = "justify-content-between" bg="dark" variant="dark" sticky="top">
        <Link to="/">
          <Navbar.Brand href="">HQ Trivia</Navbar.Brand>   
        </Link>                
        <Button onClick={goToNextPage}>Next</Button>
      </Navbar>
    </>
  );
}

export default Header;