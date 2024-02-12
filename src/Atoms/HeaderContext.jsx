import { useLocation } from "react-router-dom";
import Header from "../Molecules/Header";
import React, { createContext } from "react";

const HeaderContext = createContext(true);
const useShowHeader = () => {
  const { pathname } = useLocation();
  return !pathname.includes("login");
};

const HeaderProvider = ({ children }) => {
  const showHeader = useShowHeader();
  console.log(showHeader);
  return (
    <HeaderContext.Provider value={showHeader}>
      {showHeader && <Header />}
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderProvider;
