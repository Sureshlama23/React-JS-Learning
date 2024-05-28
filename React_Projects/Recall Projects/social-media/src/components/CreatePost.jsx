import { Form, redirect } from "react-router-dom";

const CreatePost = () => {              

  return (
    <Form method="POST" className="create-form">
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
          name="userId"
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
          name="title"
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
          name="reactions"
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
          name="body"
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
          name="tags"
        />
      </div>

      <button className="btn btn-primary">Post</button>
    </Form>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  return redirect("/");
}

export default CreatePost;
