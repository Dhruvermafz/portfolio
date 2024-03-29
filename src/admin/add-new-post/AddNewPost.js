import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  Card,
  Alert,
} from "react-bootstrap";
import MetaData from "../../components/MetaData";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../../firebase";
import Pre from "../../components/Pre";
import "../../styles/addblog.css";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../config";
import blogService from "../../api/blogs/blogService";
import { checkAuth } from "../../Lib/CheckAuth";
export default function AddBlogPost() {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication status when component mounts
    const user = checkAuth();
    if (!user) {
      // Redirect to login page or handle unauthorized access
      navigate("/login");
    }
  }, []);

  const handleUploadImage = async () => {
    try {
      if (!file) {
        setImageUploadError("Please select an image");
        return;
      }
      setImageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + "-" + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageUploadError("Image upload failed");
          setImageUploadProgress(null);
        },
        () => {
          setImageUploadProgress(null);
          setImageUploadError(null);
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setFormData({ ...formData, image: downloadURL });
          });
        }
      );
    } catch (error) {
      setImageUploadError("Image upload failed");
      setImageUploadProgress(null);
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await blogService.createBlog(formData);
      if (!res.ok) {
        const data = await res.json();
        setPublishError(data.message);
        return;
      }
      setPublishError(null);
      const data = await res.json();
      navigate(`/blog/${data.slug}`);
    } catch (error) {
      setPublishError("Something went wrong");
    }
  };

  return (
    <Container className="portfolio-new">
      <MetaData title="Add New Blog" />
      <Row>
        <Col lg={8} className="add-blog">
          <Card className="container">
            <div className="card-header">
              <h2>New Blog</h2>
            </div>

            <div className="tab-content p-4 sm:p-5">
              <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <Form.Control
                  type="text"
                  placeholder="Title"
                  required
                  id="title"
                  className="flex-1"
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />
                <Form.Select
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                >
                  <option value="uncategorized">Select a category</option>
                  <option value="javascript">JavaScript</option>
                  <option value="reactjs">React.js</option>
                  <option value="nextjs">Next.js</option>
                </Form.Select>
                <div className="d-flex gap-4 align-items-center justify-between border-4 border-teal-500 border-dotted p-3">
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                  <Button
                    type="button"
                    onClick={handleUploadImage}
                    disabled={imageUploadProgress !== null}
                  >
                    {imageUploadProgress !== null ? (
                      <div className="w-16 h-16">
                        <Pre />
                      </div>
                    ) : (
                      "Upload Image"
                    )}
                  </Button>
                </div>

                {formData.image && (
                  <img
                    src={formData.image}
                    alt="upload"
                    className="w-full h-72 object-cover"
                  />
                )}
                <ReactQuill
                  theme="snow"
                  placeholder="Write something..."
                  className="h-72 mb-12"
                  required
                  onChange={(value) =>
                    setFormData({ ...formData, content: value })
                  }
                />
                <Button type="submit" disabled={imageUploadProgress !== null}>
                  Publish
                </Button>
                {publishError && (
                  <Alert variant="danger" className="mt-5">
                    {publishError}
                  </Alert>
                )}
              </Form>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
