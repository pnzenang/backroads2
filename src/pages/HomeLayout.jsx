import { useState, createContext, useContext } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

const HomeContext = createContext();

const HomeLayout = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };
  return (
    <>
      <HomeContext.Provider value={{ showNavLinks, toggleNavLinks }}>
        <Navbar />
        <Outlet />
        <Footer />
      </HomeContext.Provider>
    </>
  );
};
export const useHomeContext = () => useContext(HomeContext);
export default HomeLayout;
