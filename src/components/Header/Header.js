import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler
} from "reactstrap";
import { Link } from "react-router-dom";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand tag={Link} to={"/"}>
        Painel
      </NavbarBrand>

      <NavbarToggler onClick={toggle} />

      <Collapse isOpen={open} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem href="#">
            <NavLink tag={Link} to={"/users-list"}>
              Listar Usuários
            </NavLink>
          </NavItem>
          <NavItem href="#">
            <NavLink tag={Link} to={"/user-create"}>
              Cadastrar usuário
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
