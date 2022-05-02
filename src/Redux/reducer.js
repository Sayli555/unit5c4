import {LOGIN} from "./actions"
const init = {user:null};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case LOGIN:
      // localStorage.setItem("userLoginDetails", JSON.stringify(payload));
      return {...store, user:payload}

    default:
      return store;
  }
};
