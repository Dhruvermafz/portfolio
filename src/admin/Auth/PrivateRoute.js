import isAdminAuthenticated from "./helper";
import { Navigate, useLocation } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import AdminProjectFormEntryPoint from "../projectform";
import AdminCertificateFormEntryPoint from "./certificateform";
import { REACT_APP_ADMIN_IDENTIFICATION_ROLE } from "../../config";
export const AdminPrivateRoute = ({ Component }) => {
  if (
    isAdminAuthenticated() &&
    isAdminAuthenticated().role === REACT_APP_ADMIN_IDENTIFICATION_ROLE
  ) {
    return <Component />;
  }

  return <Navigate to="/login" />;
};

export const AdminIsSignedIn = () => {
  if (
    isAdminAuthenticated() &&
    isAdminAuthenticated().role === REACT_APP_ADMIN_IDENTIFICATION_ROLE
  ) {
    return <Navigate to="/admin" />;
  }

  return <AdminLogin />;
};

export const AdminProjectFormEntry = () => {
  const { state } = useLocation();

  if (state) {
    const { project, projectsCategory } = state;
    return (
      <AdminProjectFormEntryPoint
        project={project}
        projectsCategory={projectsCategory}
      />
    );
  }
  return <Navigate to="/admin/project" />;
};

export const AdminCertificateFormEntry = () => {
  const { state } = useLocation();

  if (state) {
    return <AdminCertificateFormEntryPoint />;
  }

  return <Navigate to="/admin/certificates" />;
};
