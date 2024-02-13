import { AuthProvider } from "./Atoms/AuthContext";
import React from "react";
import { Outlet } from "react-router-dom";
import { CrudProvider } from "./Atoms/CrudContext";


function App() {
  return (

    <CrudProvider>
    <AuthProvider>
      <Outlet />
    </AuthProvider>
    </CrudProvider>
 
  );
}

export default App;
