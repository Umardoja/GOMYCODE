import React from "react";
import "./App.css";
import CategoryCard from "./components/CategoryCard";
import TopBar from "./components/TopBar";
import MainNavbar from "./components/MainNavBar";
import Sidebar from "./components/LeftSideBar";
import Hero from "./components/Hero";
import RightPanel from "./components/RightSideBar";
import CategoryList from "./components/CategoryList";

const App = () => {
  return (
    <>
      <TopBar />
      <MainNavbar />

      <div className="container-fluid mt-3">
        <div className="row g-3">
          <div className="col-md-2">
            <Sidebar />
          </div>

          <div className="col-md-7">
            <Hero />
            <div className="mt-3 bg-white p-3 rounded">
              <CategoryList />
            </div>
          </div>

          <div className="col-md-3">
            <RightPanel />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
