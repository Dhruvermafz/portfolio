const isDevelopment = process.env.NODE_ENV === "development";

export const BASE_URL = isDevelopment
  ? "https://social-api-w6xb.onrender.com/"
  : "https://social-api-w6xb.onrender.com/";

export const API_BASE_URL = "http://localhost:8000";
export const REACT_APP_COOKIE_IDENTIFIER = "89765";
export const REACT_APP_ADMIN_IDENTIFICATION_ROLE = "admin";

const getTokenFromLocalStorage =
  JSON.parse(localStorage.getItem("user")) || null;

export const config = {
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage?.token || ""}`,
    Accept: "application/json",
  },
};
