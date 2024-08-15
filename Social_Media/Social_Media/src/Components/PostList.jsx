
import Post from "./Post";
import EmptyPost from "./EmpyPost";
import { useLoaderData } from "react-router-dom";
const PostList = () => {

  const postList= useLoaderData()

  return (
    <>
      {postList.length === 0 && <EmptyPost />}
      {postList.map((i) => <Post key={i.id} post={i}  />) }
    </>
  );
};

export const fetchPostData= ()=>{
  return fetch("https://dummyjson.com/posts")
  .then((res) => res.json())
  .then((data) => data.posts);
}
export default PostList;
