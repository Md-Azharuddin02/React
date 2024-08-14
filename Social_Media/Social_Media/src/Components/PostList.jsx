import { useContext } from "react";
import { PostContext } from "../store/post-store";
import Post from "./Post";
import EmptyPost from "./EmpyPost";
import Loader from "./Loader";

const PostList = () => {
  const { postList, spinner} = useContext(PostContext);

  return (
    <>
      {spinner && <Loader />}
      {!spinner && postList.length === 0 && <EmptyPost />}
      {!spinner && postList.map((i) => <Post key={i} post={i} />)}
    </>
  );
};
export default PostList;
