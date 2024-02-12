import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Atoms/AuthContext";
import LoginError from "../Molecules/LoginError";
import UserDetails from "../Molecules/UserDetails";


const Dashboard = () => {
  const { userData } = useContext(AuthContext);

  return (
    <>
      {userData ? (
        <div style={{ display: "flex", border: "1px solid blue" }}>
          <UserDetails />

        </div>
      ) : (
        <LoginError />
      )}
    </>
  );
};

export default Dashboard;
