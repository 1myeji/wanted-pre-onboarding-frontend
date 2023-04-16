import React from "react";
import AuthContainer from "../components/auth/AuthContainer";
import { signInApi } from "../api/api";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const onSubmitSignIn = async (event, email, password) => {
    event.preventDefault();
    const signInRequest = {
      email: email,
      password: password,
    };
    try {
      const res = await signInApi(signInRequest);
      if (res.status === 200) {
        navigate("/todo");
        localStorage.setItem("accessToken", res.data.access_token);
      }
    } catch (error) {
      if (error.response) alert(error.response.data.message);
    }
  };

  return (
    <AuthContainer
      authTitle="로그인"
      buttonId="signin-button"
      onSubmit={onSubmitSignIn}
    />
  );
};

export default SignIn;
