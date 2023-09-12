import { baseApiUrl } from "./api";

const postsUrl = baseApiUrl + "posts";

const getPosts = async () => {
  const response = await fetch(postsUrl);

  return await response.json();
};

export { getPosts };
