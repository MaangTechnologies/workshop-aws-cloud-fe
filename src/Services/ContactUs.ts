import axios from "axios";
import { toast } from "react-toastify";
import { authActionTypes } from "../Store/Auth";
import { API_URL_CONSTANT } from "../Utilities/constants";
import { headers } from "../Utilities/common";

export function contactUsAPICall(data: any) {
  return (dispatch: any) => {
    dispatch({
      type: authActionTypes.CONTACT_US,
      payload: {
        data: [],
        loader: true,
        error: null,
      },
    });
    const url = `${API_URL_CONSTANT.CONTACT_US}`;
    axios
      .post(url, data, { headers: headers })
      .then((response: any) => {
        if (response.data) {
          dispatch({
            type: authActionTypes.CONTACT_US,
            payload: {
              data: response.data,
              loader: false,
              error: null,
            },
          });
          toast.success(`contact us submitted successfully`);
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
      })
      .catch((error: any) => {
        if (error?.response?.status === 400) {
          dispatch({
            type: authActionTypes.CONTACT_US,
            payload: {
              data: [],
              loader: false,
              error: null,
            },
          });
          toast.error(error?.response?.data?.detail);
        } else {
          dispatch({
            type: authActionTypes.CONTACT_US,
            payload: {
              data: [],
              loader: false,
              error: null,
            },
          });
          toast.error("Something went wrong. Please Try Again..!");
        }
      });
  };
}
