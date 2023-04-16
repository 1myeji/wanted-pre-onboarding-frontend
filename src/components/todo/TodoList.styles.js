import styled from "styled-components";

export const TodoListEl = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  margin-bottom: 10px;
  input[type="checkbox"] {
    margin-right: 10px;
    cursor: pointer;
  }
  .modify_input {
    padding: 3px;
  }
  button {
    padding: 0px 10px;
    text-align: center;
    height: 30px;
    border-radius: 3px;
    color: rgb(255, 255, 255);
    background-color: rgb(95, 0, 128);
    border: none;
    font-size: 13px;
    margin-left: 5px;
    cursor: pointer;
  }
`;
