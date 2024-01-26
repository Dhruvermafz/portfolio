import axios from "axios";
import { BASE_URL } from "../../config";
import { config } from "../../config";

const getCategory = async () => {
  const response = await axios.get(`${BASE_URL}category`);
  return response.data;
};

const createCategory = async (category) => {
  const response = await axios.post(
    `${BASE_URL}category/add`,
    category,
    config
  );
  return response.data;
};

const deleteCategory = async (category) => {
  const response = await axios.delete(
    `${BASE_URL}category/delete`,
    category,
    config
  );
  return response.data;
};

const categoryService = {
  getCategory,
  createCategory,
  deleteCategory,
};

export default categoryService;
