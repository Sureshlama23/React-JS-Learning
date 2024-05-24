import { useReducer } from "react";
import { createContext } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
// ------------

const PostListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostListReducer, []);

  const addPost = (id, title, body, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: { id, title, body, reactions, tags },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: { posts },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  return (
    <PostListContext.Provider
      value={{ postList, addPost, addInitialPosts, deletePost }}
    >
      {children}
    </PostListContext.Provider>
  );
};
export default PostListProvider;
