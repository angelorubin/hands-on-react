import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavbarToggler,
  Dropdown,
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
        <Nav navbar>
          <Dropdown isOpen={dropdownOpen} toggle={dropdownToggle}>
            <DropdownToggle caret size="sm">
              usuários
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <Link to={"/users-list"}>listar usuários</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to={"/user-create"}>cadastrar usuários</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
