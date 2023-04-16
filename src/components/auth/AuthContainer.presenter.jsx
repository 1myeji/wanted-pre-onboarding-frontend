import React from "react";
import {
  AuthTitle,
  InputWrapper,
  AuthButton,
  ErrorMessage,
} from "./AuthContainer.styles";

const AuthContainerPresenter = ({
  authTitle,
  buttonId,
  onChangeAuthInputValue,
  authInputValue,
}) => {
  return (
    <>
      <AuthTitle>{authTitle}</AuthTitle>
      <InputWrapper>
        <input
          data-testid="email-input"
          type="text"
          placeholder="이메일을 입력해주세요"
          onChange={event => onChangeAuthInputValue(event, "email")}
        />
        <ErrorMessage>{authInputValue.email.errorMsg}</ErrorMessage>
        <input
          data-testid="password-input"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={event => onChangeAuthInputValue(event, "password")}
        />
        <ErrorMessage>{authInputValue.password.errorMsg}</ErrorMessage>
      </InputWrapper>
      <AuthButton
        data-testid={buttonId}
        disabled={
          authInputValue.email.errorMsg ||
          authInputValue.password.errorMsg ||
          !authInputValue.email.content ||
          !authInputValue.password.content
        }
      >
        {authTitle}
      </AuthButton>
    </>
  );
};

export default AuthContainerPresenter;
