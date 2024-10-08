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
 
  const addPost = (sendPost) => {
    dispatchPostList({
      type: "ADD_POST",
      payloads: sendPost
    })
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
        setSpinner,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
export default PostContextProvide;
