import "./App.css";
import Heading from "../components/Heading";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import { useState } from "react";
import PostListProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar></SideBar>
        <div className="content">
          <Heading></Heading>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
