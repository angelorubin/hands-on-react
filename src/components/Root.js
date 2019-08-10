import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./home/Home";
import { Header } from "./header/Header";
import { UsersList } from "./user/UsersList";
import { UserCreate } from "./user/UserCreate";
import { useSelector } from "react-redux";

export const Root = () => {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/users-list" component={UsersList} />
      <Route path="/user-create" component={UserCreate} />
    </Router>
  );
};
