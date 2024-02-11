import React from "react";
import { Link } from "react-router-dom";
import "../../styles/portfolio.css";
import Carousel from "./Carousel";
import NewPortfolio from "../../admin/projects/NewPortfolio";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Extras/Footer";
const PortfolioPage = () => {
  return (
    <body className="body header-fixed counter-scroll">
      <div id="wrapper">
        <div id="page" className="clearfix">
          <Navbar />

          <main className="main-content pb-8">
            <h3 className="portfolio-header">Portfolio</h3>

            <button class="btn space-x-2 bg-primary font-medium text-white shadow-lg shadow-primary/50 hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:shadow-accent/50 dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-indigo-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <Link to="/admin/portfolio/add">
                <span> New Project </span>
              </Link>
            </button>

            <Carousel />
          </main>
          <Footer />
        </div>
      </div>

      <a id="scroll-top" class="button-go"></a>
    </body>
  );
};

export default PortfolioPage;
