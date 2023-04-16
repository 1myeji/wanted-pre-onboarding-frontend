import React from "react";
import AuthContainer from "../components/auth/AuthContainer";

const SignUp = () => {
  const onSubmitSignUp = () => {};

  return (
    <form onSubmit={onSubmitSignUp}>
      <AuthContainer authTitle="회원가입" buttonId="signup-button" />
    </form>
  );
};

export default SignUp;
