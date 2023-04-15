import React from "react";
import styled from "styled-components";

const AuthContainer = ({ authTitle, buttonId }) => {
  return (
    <>
      <AuthTitle>{authTitle}</AuthTitle>
      <InputWrapper>
        <Input
          data-testid="email-input"
          type="text"
          placeholder="이메일을 입력해주세요"
        />
        <Input
          data-testid="password-input"
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
      </InputWrapper>
      <AuthButton data-testid={buttonId}>{authTitle}</AuthButton>
    </>
  );
};

export default AuthContainer;

const AuthTitle = styled.h1`
  font-weight: 800;
  font-size: 20px;
  text-align: center;
  margin-bottom: 30px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  width: 340px;
  height: 54px;
  font-size: 14px;
  padding: 0px 11px 1px 15px;
  border-radius: 4px;
  border: 1px solid rgb(221, 221, 221);
`;

const AuthButton = styled.button`
  padding: 0px 10px;
  text-align: center;
  height: 54px;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  background-color: rgb(95, 0, 128);
  width: 100%;
  margin-top: 20px;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;
