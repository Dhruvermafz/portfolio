import axios from "axios";
import { BASE_URL } from "../../config";
import { config } from "../../config";

const getProjects = async () => {
  const response = await axios.get(`${BASE_URL}projects`);
  return response.data;
};

const createProjects = async (project) => {
  const response = await axios.post(`${BASE_URL}projects/add`, project, config);
  return response.data;
};

const projectsService = {
  getProjects,
  createProjects,
};

export default projectsService;
