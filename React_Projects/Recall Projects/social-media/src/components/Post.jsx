import { useContext } from "react";
import { FiDelete } from "react-icons/fi";
import { PostListContext } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);
  const handleOnDelete = (postId) => {
    deletePost(postId);
  };
  return (
    <div className="card cus-card" style={{ width: "30rem" }}>
      <div className="card-body ">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => handleOnDelete(post.id)}
          >
            <FiDelete></FiDelete>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span className="badge text-bg-primary cus-tag" key={tag}>
            {tag}
          </span>
        ))}
        <div className="alert alert-info reactions" role="alert">
          This post has been reacted by {post.reactions["likes"]} peoples.
        </div>
      </div>
    </div>
  );
};

export default Post;
