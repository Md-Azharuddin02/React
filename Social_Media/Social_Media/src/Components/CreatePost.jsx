import { redirect } from "react-router-dom";
import { Form } from "react-router-dom";

const CreatePost = () => {

  // const getData = (event) => {

  // };
  return (
    <Form method="POST" className=" p-4 m-4 border">
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Id"
          name="userId"
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          name="title"

        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Post"
          name="body"

        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Tags"
          name="tags"
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Submit
      </button>
    </Form>
  );
};

export async function getFormData(data){
  const formData= await data.request.formData()
  const postData= Object.fromEntries(formData)
   postData.tags= postData.tags.split(",")

 await fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData)
  })
    .then((res) => res.json())
    .then((sendPost) => {
      console.log(sendPost)
    });

  return redirect('/')
}
export default CreatePost;
