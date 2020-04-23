import React from 'react';
import './Header.scss';
import { Navbar, Form, FormControl } from 'react-bootstrap';

function Header() {           
  return (
    <>
      <Navbar className = "justify-content-between" bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="">HQ Trivia</Navbar.Brand>   
      </Navbar>
    </>
  );
}

export default Header;