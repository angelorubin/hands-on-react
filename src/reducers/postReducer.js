import { ADD_POST } from "../constants/actionTypes";

export const postReducer = (state = [{ posts: {} }], action) => {
  if (action.type === ADD_POST) {
    return (state = [...state, action.posts]);
  }
  return state;
};
