import React from "react";
import GoogleButton from "react-google-button";
import { auth, googleAuthProvider } from "../Atoms/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Avatar,
} from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../Atoms/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const db = getDatabase();
      const userObj = {
        name: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
      };
      const id = `${result.user.uid}`;
      set(ref(db, id), userObj);
      login(userObj, id);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Card
      className="login-card flex-item"
      sx={{
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
      }}
    >
      <CardContent className="flex-item" style={{ height: "350px" }}>
        <Avatar
          sx={{
            width: 200,
            height: 200,
            bgColor: "teal",
            color: "white",
            margin: "auto",
          }}
        >
          <img src="images/person.jpg" alt="person" />
        </Avatar>
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          style={{ fontWeight: "bold" }}
        >
          Sign in
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Sign in with your Google account
        </Typography>
      </CardContent>
      <CardActions
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <GoogleButton onClick={handleSignInWithGoogle} />
      </CardActions>
    </Card>
  );
};

export default Login;
