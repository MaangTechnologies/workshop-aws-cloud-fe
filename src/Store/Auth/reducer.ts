import { SIGN_IN, SIGN_UP, GOOGLE_AUTH, CONTACT_US } from "./actionTypes";
import { authActionTypes } from "./types";

export const initialLoginState = {
  signin: {
    data: [],
    loader: false,
    error: null,
  },
  signup: {
    data: [],
    loader: false,
    error: null,
  },
  googleauth: {
    data: [],
    loader: false,
    error: null,
  },
  contact_us: {
    data: [],
    loader: false,
    error: null,
  },
};

export default (state = initialLoginState, action: authActionTypes) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        signin: {
          ...state.signin,
          data: action.payload.data,
          loader: action.payload.loader,
          error: action.payload.error,
        },
      };
    case SIGN_UP:
      return {
        ...state,
        signup: {
          ...state.signup,
          data: action.payload.data,
          loader: action.payload.loader,
          error: action.payload.error,
        },
      };
    case GOOGLE_AUTH:
      return {
        ...state,
        googleauth: {
          ...state.googleauth,
          data: action.payload.data,
          loader: action.payload.loader,
          error: action.payload.error,
        },
      };
    case CONTACT_US:
      return {
        ...state,
        contact_us: {
          ...state.contact_us,
          data: action.payload.data,
          loader: action.payload.loader,
          error: action.payload.error,
        },
      };
    default:
      return state;
  }
};
