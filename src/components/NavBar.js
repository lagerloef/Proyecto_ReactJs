import React, { useState } from 'react';
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
        <NavbarBrand href="/">CompuTienda</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Laptop">Laptop</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Tablet">Tablet</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Celular">Smart Phone</NavLink>
            </NavItem>                                       
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;