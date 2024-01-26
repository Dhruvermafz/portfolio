import axios from "axios";
import { BASE_URL, config } from "../../config";


const getBlogs = async () => {
    const response =await axios.get(`${BASE_URL}posts`);
    return response.data
}

const createBlog = async (blog) => {
    const response =await axios.post(`${BASE_URL}posts/create`, blog, config);
    return response.data
}

const updateBlog = async (id, blog) => {
    const response =await axios.put(`${BASE_URL}posts/${id}`,blog, config);
    return response.data
}

const getBlog = async (id) => {
    const response =await axios.get(`${BASE_URL}posts/${id}`, config);
    return response.data
}

const blogService = {
    getBlogs,
    createBlog,
    getBlog,
    updateBlog,
};

export default blogService