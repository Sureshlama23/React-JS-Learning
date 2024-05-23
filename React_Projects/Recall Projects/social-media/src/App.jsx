import "./App.css";
import Heading from "./components/Heading";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import { PostListContext } from "./store/post-list-store";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectTab, setSelectTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar selectTab={selectTab} setSelectTab={setSelectTab}></SideBar>
        <div className="content">
          <Heading></Heading>
          {selectTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
