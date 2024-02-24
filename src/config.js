const isDevelopment = process.env.NODE_ENV === "development";

export const BASE_URL = isDevelopment
  ? "http://localhost:8000"
  : "https://api-portfolio-shuz.onrender.com";

export const API_BASE_URL = "https://api-portfolio-shuz.onrender.com";
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
