import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar color="primary" dark expand="md">
      <NavbarBrand tag={Link} to={"/"}>
        Painel
      </NavbarBrand>

      <NavbarToggler onClick={toggle} />

      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <ButtonDropdown isOpen={dropdownOpen} toggle={dropdownToggle}>
            <DropdownToggle caret>Usuários</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <Link to={"/users-list"}>Listar usuários</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to={"/user-create"}>Cadastrar usuários</Link>
              </DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
