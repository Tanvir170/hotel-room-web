import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
      <Nav className="header">
        <h1>$ea Place Rest House</h1>
        <div>
        <Link to="/home">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        </div>
      </Nav>
  );
};

export default Header;
