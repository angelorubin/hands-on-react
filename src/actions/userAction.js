import { ADD_USER } from "../constants/actionTypes";
import { http } from "../config";

export const addUser = user => {
  return {
    type: ADD_USER,
    user
  };
};

export const fetchAllUsers = () => {
  return {
    type: FETCH_ALL_USERS
  };
};
