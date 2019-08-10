import React, { useEffect, useReducer } from "react";
import { Jumbotron, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

const initialState = 0;

export const Home = () => {
  const dispatch = useDispatch();

  /*
  useEffect(() => {
  dispatch({
    type: "ADD_USER",
    users: { fullname: "angelo rubin" }
  });
  }, []);
  */

  /*
  const dispatch = useDispatch();
  const users = useSelector(state => state.userReducer);

  const addUser = () => {
    dispatch({
      type: ADD_USER,
      user: {
        id: 3,
        fullname: "suzana gonzalez rubin",
        telephone: "(19) 3532-3010",
        cellphone: "(19) 99187-3452",
        website: "https://www.suzanaegonzalez.com.br"
      }
    });
  };

  useEffect(() => addUser(), []);
  console.log(users);
  */

  return (
    <Jumbotron>
      <h1 className="display-5">Olá, bem vindo(a) username!</h1>
      <p className="lead">
        This is a simple hero unit, a simple Jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <p className="lead">
        <Button size="sm" color="primary">
          Learn More
        </Button>
      </p>
    </Jumbotron>
  );
};
