import React, { useState } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import CartIcon from './CartIcon';
const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>    
      <Navbar color="dark" dark expand="md">      
        <CartIcon/>           
        <NavbarBrand tag={RRNavLink} exact to="/" activeClassName="active">CompuTienda</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={RRNavLink} exact to="/" activeClassName="active">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} exact to="/Notebooks" activeClassName="active">Laptops</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} exact to="/Tablets" activeClassName="active">Tablets</NavLink>
            </NavItem>   
            <NavItem>
              <NavLink tag={RRNavLink} exact to="/SmartPhones" activeClassName="active">Celulares</NavLink>
            </NavItem>        
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>     
    </div>
  );
}

export default Menu;