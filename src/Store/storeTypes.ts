export interface SystemState {
  auth: {
    signin: {
      data: any;
      loader: boolean;
      error: any;
    };
    signup: {
      data: any;
      loader: boolean;
      error: any;
    };
    googleauth: {
      data: any;
      loader: boolean;
      error: any;
    };
    contact_us: {
      data: any;
      loader: boolean;
      error: any;
    };
  };
}
