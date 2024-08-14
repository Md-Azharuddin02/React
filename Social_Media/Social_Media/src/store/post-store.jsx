import { useReducer, useState, useEffect } from "react";
import { createContext } from "react";

const postListReducer = (currentState, action) => {
  let newPost = currentState;
  if (action.type === "FETCH_ALL_DATA") {
    newPost = action.payloads
  }

  else if (action.type === "ADD_POST") {
      const addedPost = [action.payloads, ...currentState];
      newPost = addedPost;
    
  } else if (action.type === "DELETE_POST") {
    const deletedPost = currentState.filter((i) => i.id !== action.payloads.id);
    newPost = deletedPost;
  }
  return newPost;
};
//creating context for post list
export const PostContext = createContext({
  postList:[],
  addPost: () => { },
  deletePost: () => { },
  getFetchData: () => { }
});


// creating post context provider.
const PostContextProvide = ({ children }) => {
  // Reducer hook
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [spinner, setSpinner] = useState(false);
  useEffect(() => {
    setSpinner(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        dispatchPostList({
          type: "FETCH_ALL_DATA",
          payloads:data.posts
        }), setSpinner(false);
      });
    
    return () => {
      console.log("cleaning the code");
    }
  }, []);
  const addPost = (sendPost) => {
    dispatchPostList({
      type: "ADD_POST",
      payloads: sendPost
    })
    console.log(sendPost)
  };
  const deletePost = (id) => {
    dispatchPostList({
      type: "DELETE_POST",
      payloads: {
        id: id,
      },
    })
  };
  return (
    <PostContext.Provider
      value={{
        postList,
        addPost,
        deletePost,
        spinner,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
export default PostContextProvide;
