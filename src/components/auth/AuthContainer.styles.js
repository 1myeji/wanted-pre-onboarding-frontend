import styled from "styled-components";

export const AuthTitle = styled.h1`
  font-weight: 800;
  font-size: 20px;
  text-align: center;
  margin-bottom: 30px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  input {
    width: 340px;
    height: 54px;
    font-size: 14px;
    padding: 0px 11px 1px 15px;
    border-radius: 4px;
    border: 1px solid rgb(221, 221, 221);
  }
`;

export const AuthButton = styled.button`
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
  :disabled {
    background-color: gray;
  }
`;

export const ErrorMessage = styled.p`
  color: rgb(95, 0, 128);
`;
