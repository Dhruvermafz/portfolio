import axios from "axios";
import { BASE_URL } from "../../config";

const getMembers = async () => {
  const response = await axios.get(`${BASE_URL}auth/allusers`);
  return response.data;
};

const membersService = {
  getMembers,
};

export default membersService;
