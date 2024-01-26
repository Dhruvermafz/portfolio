import authSlice from "./auth/authSlice";
import membersSlice from "./members/membersSlice";
import skillsSlice from "./skills/skillsSlice";
import projectsSlice from "./projects/projectsSlice";
import categorySlice from "./category/categorySlice";
import blogSlice from "./blogs/blogSlice";
import uploadSlice from "./upload/uploadSlice";
import { combineReducers } from "@reduxjs/toolkit";
export const store = combineReducers({
  auth: authSlice,
  members: membersSlice,
  skills: skillsSlice,
  projects: projectsSlice,
  category: categorySlice,
  blogs: blogSlice,
  upload: uploadSlice,
});
