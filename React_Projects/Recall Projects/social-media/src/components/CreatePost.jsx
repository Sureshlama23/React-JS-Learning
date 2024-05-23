import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);

  const postIDEleElement = useRef();
  const postTitleElement = useRef();
  const contentElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleNewPost = (event) => {
    event.preventDefault();
    const title = postTitleElement.current.value;
    const body = contentElement.current.value;
    const reactions = reactionsElement.current.value;
    const id = postIDEleElement.current.value;
    const tags = tagsElement.current.value.split(/\s+/);
    postTitleElement.current.value = "";
    contentElement.current.value = "";
    reactionsElement.current.value = "";
    postIDEleElement.current.value = "";
    tagsElement.current.value = "";
    addPost(id, title, body, reactions, tags);
  };

  return (
    <form className="create-form" onSubmit={(event) => handleNewPost(event)}>
      <div className="mb-3">
        <label htmlFor="post id" className="form-label">
          Your ID
        </label>
        <input
          type="text"
          className="form-control"
          id="postid"
          aria-describedby="emailHelp"
          placeholder="Enter user id"
          ref={postIDEleElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="heading" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          aria-describedby="emailHelp"
          placeholder="How are you feeling today?"
          ref={postTitleElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of Reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          aria-describedby="emailHelp"
          placeholder="Post reactions"
          ref={reactionsElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Post Content
        </label>
        <textarea
          className="form-control"
          id="body"
          rows="4"
          ref={contentElement}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Post Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          aria-describedby="emailHelp"
          placeholder="Enter Post Tags"
          ref={tagsElement}
        />
      </div>

      <button className="btn btn-primary">Post</button>
    </form>
  );
};

export default CreatePost;
