import axios from "axios";
import { BASE_URL, config } from "../../config";

const uploadImg = async (data) => {
  const response = await axios.post(`${BASE_URL}upload/`, data, config);
  return response.data;
};

const uploadService = {
  uploadImg,
};

export default uploadService;
