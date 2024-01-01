import { BASE_URL } from "../config";
import { GLOBALTYPES } from "./globaltypes";

export const POST_TYPES = {
  GET_POSTS: "GET_POSTS",
};

const getPosts = async (token, query) => {
  try {
    const res = await fetch(
      BASE_URL + "api/posts?" + new URLSearchParams(query),
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

export { getPosts };
