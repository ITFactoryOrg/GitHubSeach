import React from "react";
import { Info, Repos, User, Search, Navbar } from "../components";
import loadingImage from "../images/preloader.gif";
import { useGlobalGithubContext } from "../context/context";
const Dashboard = () => {
  const { isLoading } = useGlobalGithubContext();

  if (isLoading) {
    return <main>
      <Navbar />
      <Search />
      <img className="loading-img" src={loadingImage} alt="loading" />
    </main>
  }
  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
