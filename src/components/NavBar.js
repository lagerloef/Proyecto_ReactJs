import React, { useState, useContext } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { CartContext } from '../context/cartContext';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,  
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import CartIcon from './CartIcon';
import { Link } from 'react-router-dom';

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);  
  const [cart] = useContext(CartContext);
  const qtyProducts = cart.map((item) => item.qty);  
  const totalQtyProducts = qtyProducts.reduce((a, b) => a + b,0);

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
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Categorías
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to="/categorias/Notebooks" >Notebooks</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/categorias/Tablets">Tablets</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/categorias/Celulares">Celulares</Link>
                </DropdownItem>
                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink tag={RRNavLink} exact to="/cart" activeClassName="active">
                Cart({totalQtyProducts})
              </NavLink>
            </NavItem>       
          </Nav>
          <NavbarText>CompuTienda</NavbarText>
        </Collapse>
      </Navbar>     
    </div>
  );
}

export default Menu;