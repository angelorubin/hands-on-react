import { ADD_USER } from "../constants/actionTypes";
import { http } from "../config";

const INITIAL_STATE = {
  users: [
    {
      id: 1,
      fullname: "angelo rogerio rubin",
      email: "angelorubin@gmail.com",
      telephone: "(19) 3527-2118",
      cellphone: "(19) 99187-2093"
    },
    {
      id: 2,
      fullname: "manoela gonzalez rubin",
      email: "manoelarubin@gmail.com",
      telephone: "(19) 3527-2118",
      cellphone: "(19) 99453-4534"
    }
  ]
};

export const userReducer = (state = INITIAL_STATE, action) => {
  if (action.type === ADD_USER) {
    return { ...state, users: [...state.users, action.user] };
  }
  return state;
};
