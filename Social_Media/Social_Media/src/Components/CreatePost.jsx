import { useContext, useState } from "react";
import { PostContext } from "../store/post-store";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  let getId = useRef();
  let getTitle = useRef();
  let getBody = useRef();
  let getTags = useRef();

  let { addPost } = useContext(PostContext);
  const navigate = useNavigate();

  const getData = (event) => {
    event.preventDefault();
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: getId.current.value,
        title: getTitle.current.value,
        body: getBody.current.value,
        tags: getTags.current.value.split(","),
      }),
    })
      .then((res) => res.json())
      .then((sendPost) => {
        addPost(sendPost);
        navigate('/')
      });
    getId.current.value = "";
    getTitle.current.value = "";
    getBody.current.value = "";
    getTags.current.value = "";
  };
  return (
    <form className=" p-4 m-4 border" onSubmit={(event) => getData(event)}>
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Id"
          ref={getId}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          ref={getTitle}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Post"
          ref={getBody}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Tags"
          ref={getTags}
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Submit
      </button>
    </form>
  );
};
export default CreatePost;
