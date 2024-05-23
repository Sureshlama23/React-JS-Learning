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
  } else if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    Default_data
  );

  const addPost = (id, title, body, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: { id, title, body, reactions, tags },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

const Default_data = [
  {
    id: "1",
    title: "React Learn",
    body: "Learning React to master it",
    reactions: 5,
    tags: ["happy", "excited", "proud"],
  },
  {
    id: "2",
    title: "React Learn 222",
    body: "Learning React to master it 2222",
    reactions: 5,
    tags: ["happy", "serious", "proud"],
  },
];

export default PostListProvider;
