import React, { useState, useEffect, createContext } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/HomeBase";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./styles/style.css";
import ErrorBoundary from "./components/Error/ErrorBoundary";
import BlogPage from "./components/Blogs/BlogPage";
import AdminWrapper from "./admin/adminWrapper";
import AdminLogin from "./admin/Auth/AdminLogin";
import Error404 from "./components/Error/404";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NewPortfolio from "./admin/projects/NewPortfolio";
import BlogWrapper from "./admin/blogWrapper";
import CreatePost from "./admin/add-new-post/AddNewPost";

import TeamMaster from "./admin/team-access/TeamMaster";
import PortfolioWrapper from "./admin/portfolioWrapper";
import AdminSignUp from "./admin/Auth/AdminSignup";
import CertificateWrapper from "./admin/certificateWrapper";
// Import the PrivateRoute component

export const UserContext = createContext([]);

function App() {
  const [load, updateLoad] = useState(true);
  const [userInfo, setUserInfo] = useState(() => {
    const saved = localStorage.getItem("name");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(userInfo));
  }, [userInfo]);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/404" element={<Error404 />} />

            {/* Admin Routes */}
            <Route path="/admin/projects/add-edit" element={<NewPortfolio />} />
            <Route path="/admin/team-access" element={<TeamMaster />} />
            <Route path="/admin/projects" element={<PortfolioWrapper />} />
            <Route path="/admin/blogs" element={<BlogWrapper />} />
            <Route
              path="/admin/certificates"
              element={<CertificateWrapper />}
            />
            <Route path="/admin/blogs/add-edit" element={<CreatePost />} />
            <Route path="/admin" element={<AdminWrapper />} />
            <Route path="/login" element={<AdminLogin />} />
            <Route path="/signup" element={<AdminSignUp />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
