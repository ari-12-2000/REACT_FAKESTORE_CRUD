import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const LoginError = () => {
  return (
    <Box
      className="flex-item"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Avatar
        sx={{
          width: 200,
          height: 200,
          marginBottom: 2,
        }}
      >
        <img src="images/sad.png" alt="sad image" />
      </Avatar>
      <Typography
        variant="h5"
        component="div"
        gutterBottom
        style={{ fontWeight: "bold" }}
      >
        PLEASE LOG IN
      </Typography>

      <Typography variant="body2" color="text.secondary">
        Login to view items in your Dashboard
      </Typography>
    </Box>
  );
};

export default LoginError;
