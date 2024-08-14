import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostContext } from "../store/post-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostContext);

  return (
      <div className="m-5" style={{ width: "50rem" }}>
        <div className="col-sm-8">
          <div className="card">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              <MdDelete
                style={{ width: "1rem", height: "1.5rem", cursor: "pointer" }}
                onClick={() => deletePost(post.id)}
              />
            </span>
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
              {post.tags.map((i) => (
                <span key={i} className="badge bg-primary m-1">{`#${i}`}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};
export default Post;
