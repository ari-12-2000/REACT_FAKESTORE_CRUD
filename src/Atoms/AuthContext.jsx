// AuthContext.js
import React, { createContext,  useState } from "react";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import { getDatabase, ref, onValue } from "firebase/database";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();

  const login = (newUser) => {
    setUserData(newUser);
  };

  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
    setUserData(null);
  };

  return (
    <AuthContext.Provider value={{ userData,  login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
