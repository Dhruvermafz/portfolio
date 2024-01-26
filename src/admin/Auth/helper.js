import { REACT_APP_COOKIE_IDENTIFIER } from "../../config";
const isAdminAuthenticated = () => {
  if (window && localStorage.getItem(REACT_APP_COOKIE_IDENTIFIER)) {
    return JSON.parse(localStorage.getItem(REACT_APP_COOKIE_IDENTIFIER));
  } else {
    return false;
  }
};

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    console.log("Data is: ");
    console.log(data);

    localStorage.setItem(REACT_APP_COOKIE_IDENTIFIER, JSON.stringify(data));
    next();
  }
};

export default isAdminAuthenticated;
