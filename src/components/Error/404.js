import React from "react";
import Error from "../../Assets/404.svg";

const Error404 = () => {
  return (
    <main class="main">
      <div class="cover-home3 shadow-page-404">
        <div class="container">
          <div class="row">
            <div class="col-xl-10 col-lg-12 ml-auto mr-auto">
              <div class="box-page-404">
                <div class="text-center mb-150 mt-100">
                  <div class="box-404 row">
                    <div class="col-lg-6">
                      <div class="image-404">
                        <img src={Error} alt="Genz" />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="info-404 text-start mt-60">
                        <h2 class="color-linear mb-20">Don't be spooked !</h2>
                        <p class="text-xl color-gray-500">
                          The page you’re looking for has slipped in to an
                          unknown realm. Click the button below to go back to
                          the homepage.
                        </p>
                        <div class="mt-25">
                          <a class="btn btn-linear hover-up" href="index.html">
                            Homepage
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Error404;