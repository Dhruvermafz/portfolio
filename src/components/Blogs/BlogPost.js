import React from "react";
import BlogBreadcrumbs from "./BlogBreadcrumps";
import BlogCategories from "./BlogCategories";
import BlogTags from "./BlogTags";
import BlogTitle from "./BlogTitle";
import BlogContent from "./BlogContent";

const BlogPost = () => {
  return (
    <main class="main">
      <div class="cover-home3">
        <div class="container">
          <div class="row">
            <div class="col-xl-1"></div>
            <div class="col-xl-10 col-lg-12">
              <BlogBreadcrumbs />

              <BlogTitle />
              <div class="row mt-50">
                <BlogContent />
                <BlogCategories />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPost;
