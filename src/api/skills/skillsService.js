import axios from "axios";
import { BASE_URL } from "../../config";
import { config } from "../../config";

const getSkills = async () => {
  const response = await axios.get(`${BASE_URL}skills`);
  return response.data;
};

const createSkill = async (skill) => {
  const response = await axios.post(`${BASE_URL}skills/add`, skill, config);
  return response.data;
};

const skillsService = {
  getSkills,
  createSkill,
};

export default skillsService;
