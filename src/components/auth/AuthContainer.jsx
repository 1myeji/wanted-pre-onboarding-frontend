import React, { useState } from "react";
import AuthContainerPresenter from "./AuthContainer.presenter";

const AuthContainer = ({ authTitle, buttonId }) => {
  const [authInputValue, setAuthInputValue] = useState({
    email: { content: "", errorMsg: "" },
    password: { content: "", errorMsg: "" },
  });

  const validateEmail = value => {
    if (!value.includes("@")) return "@를 포함해주세요.";
    return "";
  };

  const validatePassWord = value => {
    if (value.length < 8) return "8자 이상 입력해주세요.";
    return "";
  };

  const onChangeAuthInputValue = (event, type) => {
    let errorMsg = "";
    if (type === "email") errorMsg = validateEmail(event.target.value);
    if (type === "password") errorMsg = validatePassWord(event.target.value);

    setAuthInputValue(prev => ({
      ...prev,
      [type]: { content: event.target.value, errorMsg },
    }));
  };

  return (
    <AuthContainerPresenter
      authTitle={authTitle}
      buttonId={buttonId}
      onChangeAuthInputValue={onChangeAuthInputValue}
      authInputValue={authInputValue}
    />
  );
};

export default AuthContainer;
