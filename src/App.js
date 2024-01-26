import React, { useState, useEffect } from "react";
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
import NewPortfolio from "./components/Projects/NewPortfolio";
function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <ErrorBoundary>
        <Router>
          <Preloader load={load} />
          <div className="App" id={load ? "no-scroll" : "scroll"}>
            <Navbar />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="*" element={<ErrorBoundary />} />
              <Route path="/admin" element={<AdminWrapper />} />
              <Route path="/login" element={<AdminLogin />} />
              <Route path="/blogs" element={<BlogPage />} />
              <Route path="/404" element={<Error404 />} />
              <Route
                path="/admin/projects/add-edit"
                element={<NewPortfolio />}
              />
            </Routes>
            <Footer />
          </div>
        </Router>
      </ErrorBoundary>
    </>
  );
}

export default App;
