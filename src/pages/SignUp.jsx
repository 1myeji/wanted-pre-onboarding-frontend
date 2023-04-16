import React from "react";
import AuthContainer from "../components/auth/AuthContainer";
import { signUpApi } from "../api/api";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const onSubmitSignUp = async (event, email, password) => {
    event.preventDefault();
    const signUpRequest = {
      email: email,
      password: password,
    };
    try {
      const res = await signUpApi(signUpRequest);
      if (res.status === 201) navigate("/signin");
    } catch (error) {
      if (error.response) alert(error.response.data.message);
    }
  };

  return (
    <AuthContainer
      authTitle="회원가입"
      buttonId="signup-button"
      onSubmit={onSubmitSignUp}
    />
  );
};

export default SignUp;
