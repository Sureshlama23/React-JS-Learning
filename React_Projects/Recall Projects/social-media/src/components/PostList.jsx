import { useContext, useEffect, useState } from "react";
import { PostListContext } from "../store/post-list-store";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListContext);
  const [fetching, setfetching] = useState(false);
  const controller = new AbortController();
  const single = controller.signal;

  useEffect(() => {
    setfetching(true);
    fetch("https://dummyjson.com/posts", { single })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setfetching(false);
      });
    return () => {
      console.log("clean up useEffect");
      controller.abort();
    };
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner></LoadingSpinner>}
      {!fetching && postList.length === 0 && <WelcomeMessage></WelcomeMessage>}
      {!fetching &&
        postList.map((post) => <Post key={post.id} post={post}></Post>)}
    </>
  );
};

export default PostList;
