import React from 'react';
import './Header.scss';
import { Navbar } from 'react-bootstrap';
import { Link } from "@reach/router";

function Header() {           
  return (
    <>
      <Navbar className = "justify-content-between" bg="dark" variant="dark" sticky="top">
        <Link to="/">
          <Navbar.Brand href="">HQ Trivia</Navbar.Brand>   
        </Link>        
      </Navbar>
    </>
  );
}

export default Header;