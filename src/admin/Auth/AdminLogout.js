import { signout } from "../../api/auth";

const AdminLogout = () => {
  signout().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data);
      localStorage.removeItem(process.env.REACT_APP_COOKIE_IDENTIFIER);
      window.location.replace("/admin/signin");
    }
  });
};

export default AdminLogout;
