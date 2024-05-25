import { useCallback, useReducer, useEffect, useState } from "react";
import { createContext } from "react";

export const PostListContext = createContext({
  postList: [],
  fetching: false,
  addPost: () => {},
  deletePost: () => {},
});
// ------------

const PostListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "ADD_POST") {
    newPostList = [action.payload.post, ...currentPostList];
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
  const [fetching, setfetching] = useState(false);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: { post },
    });
    console.log(post);
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: { posts },
    });
  };

  const deletePost = useCallback(
    (postId) => {
      dispatchPostList({
        type: "DELETE_POST",
        payload: { postId },
      });
    },
    [dispatchPostList]
  );

  useEffect(() => {
    const controller = new AbortController();
    const single = controller.signal;
    setfetching(true);
    fetch("https://dummyjson.com/posts", { single })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setfetching(false);
      });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <PostListContext.Provider
      value={{ postList, addPost, fetching, deletePost }}
    >
      {children}
    </PostListContext.Provider>
  );
};
export default PostListProvider;
