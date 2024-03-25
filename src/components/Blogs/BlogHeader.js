import { useEffect, useState } from "react";
import blogService from "../../api/blogs/blogService";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Badge, Card } from "react-bootstrap";

function BlogHeader({ blogId }) {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    async function fetchBlogData() {
      try {
        const blog = await blogService.getBlog(blogId);
        setBlogData(blog);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    }

    fetchBlogData();
  }, [blogId]);

  return (
    <div>
      {blogData && (
        <Card className="cursor-pointer group px-6 py-6 md:px-10 md:w-1/3 rounded transform">
          <Badge
            bg="gray"
            text="light"
            className="text-sm font-medium tracking-widest"
          >
            {blogData.Tags.split(" ")[0]}
          </Badge>
          <Card.Title className="sm:text-2xl text-xl title-font font-semibold text-gray-700 mt-4 mb-4 group-hover:text-indigo-800">
            {blogData.Title}
          </Card.Title>
          <Card.Text className="leading-relaxed mb-5 text-gray-800">
            {blogData.Abstract}..
          </Card.Text>

          <div className="flex items-center flex-wrap pb-2 border-b-2 border-gray-300 mt-auto w-full justify-between">
            <Link
              to={`/blogs/${String(
                blogData.Title.split(" ").join("-").toLowerCase()
              )}`}
              className="text-indigo-700 inline-flex items-center group-hover:text-indigo-800"
            >
              Learn More{" "}
              <span className="pl-1">
                <AiOutlineArrowRight />
              </span>
            </Link>

            <span className="inline-flex items-center">
              <span className="flex-grow flex flex-col pl-4">
                <span className="text-gray-900 text-xs tracking-widest mt-0.5 dark:text-indigo-300">
                  {blogData.readTime}
                </span>
              </span>
            </span>
          </div>
        </Card>
      )}
    </div>
  );
}

export default BlogHeader;
