import { SIGN_IN, SIGN_UP, GOOGLE_AUTH, CONTACT_US } from "./actionTypes";

interface Signin {
  type: typeof SIGN_IN;
  payload: any;
}

interface Signup {
  type: typeof SIGN_UP;
  payload: any;
}

interface GoogleAuth {
  type: typeof GOOGLE_AUTH;
  payload: any;
}

interface CONTACT_US {
  type: typeof CONTACT_US;
  payload: any;
}

export type authActionTypes = Signin | Signup | GoogleAuth | CONTACT_US;
