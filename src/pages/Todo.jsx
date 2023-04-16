import React from "react";
import styled from "styled-components";
import TodoList from "../components/todo/TodoList";

const Todo = () => {
  return (
    <>
      <TodoTitle>Todo</TodoTitle>
      <TodoInput data-testid="new-todo-input" />
      <AddButton data-testid="new-todo-add-button">추가</AddButton>
      <TodoListWrapper>
        {[1, 2, 3].map(() => (
          <TodoList />
        ))}
      </TodoListWrapper>
    </>
  );
};

export default Todo;

const TodoTitle = styled.h1`
  font-weight: 800;
  font-size: 20px;
  text-align: center;
`;

const TodoInput = styled.input`
  width: 280px;
  height: 30px;
  font-size: 14px;
  padding: 0px 11px 1px 15px;
  border-radius: 4px;
  border: 1px solid rgb(221, 221, 221);
`;

const AddButton = styled.button`
  padding: 0px 10px;
  text-align: center;
  height: 30px;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  background-color: rgb(95, 0, 128);
  margin-top: 20px;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

const TodoListWrapper = styled.ul`
  margin-top: 10px;
`;
