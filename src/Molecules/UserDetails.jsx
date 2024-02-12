import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { AuthContext } from "../Atoms/AuthContext";
import { useContext } from "react";
import { CrudContext } from "../Atoms/CrudContext";
const UserDetails = () => {
  const { userData } = useContext(AuthContext);
  const { crudData } = useContext(CrudContext);
  return (
    <>
      <Box display="flex" ml={6} mt={4} mb={2}>
        <Avatar
          src={userData.photoURL}
          alt="User Profile"
          sx={{ width: 64, height: 64, mr: 2 }}
        />
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontFamily: "cursive",
            color: "#3f51b5",
            textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
          }}
        >
          Welcome
        </Typography>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontFamily: "Arial",
            color: "#009688",
            textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
            ml: 1,
          }}
        >
          {userData.name}
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" sx={{height:"80vh"}} justifyContent="space-evenly" ml={6} mt={4} mb={2}>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontFamily: "Arial",
            color: "#009688",
            textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
            ml: 1,
          }}
        >Created - {crudData.create}</Typography>
        
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontFamily: "Arial",
            color: "#009688",
            textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
            ml: 1,
          }}
        >Updated - {crudData.update}</Typography>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontFamily: "Arial",
            color: "#009688",
            textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
            ml: 1,
          }}
        >Deleted - {crudData.deleted}</Typography>
      </Box>
    </>
  );
};

export default UserDetails;
