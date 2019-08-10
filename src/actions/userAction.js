import { ADD_USER } from "../constants/actionTypes";

export const addUser = user => {
  return {
    type: ADD_USER,
    user
  };
};
