import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import logo from "../images/logo.jpg";

export default props => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand
          className="nav-brand"
          onClick={_ => {
            props.setPage(0);
          }}
        >
          <img className="img1" src={logo} alt="Restaurant"/>
          
        </NavbarBrand>
        <div className="nav-menu">
          
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a onClick={_ => {
            _.preventDefault();
            props.setPage(0);
          }} href="">Menu</a>
        </li>
        <li>
          <a onClick={_ => {
            _.preventDefault();
            props.setPage(1);
          }} href="">Reservation</a>
        </li>
        <div className="right">
        <li>
          <a href="/signIn">SignIn</a>
        </li>
        <li>
          <a href="/signUp">SignUp</a>
        </li>
        </div>
        
      </ul>
          </div >
      </Navbar>
    </div>
  );
};
