import React from "react";
import AuthContainer from "../components/auth/AuthContainer";

const SignIn = () => {
  const onSubmitSignIn = () => {};

  return (
    <form onSubmit={onSubmitSignIn}>
      <AuthContainer authTitle="로그인" buttonId="signin-button" />
    </form>
  );
};

export default SignIn;
