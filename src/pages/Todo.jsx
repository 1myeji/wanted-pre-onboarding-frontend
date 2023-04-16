import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TodoList from "../components/todo/TodoList";
import { createTodo, getTodos } from "../api/api";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      const result = await getTodos();
      console.log(result);
      setTodos(result);
    };
    fetchTodos();
  }, []);

  const onChangeTodoInput = event => {
    setNewTodo(event.target.value);
  };

  const onSubmitCreateTodo = async event => {
    event.preventDefault();
    const createTodoRequest = {
      todo: newTodo,
    };
    await createTodo(createTodoRequest);
    setNewTodo("");
    const updateTodos = await getTodos();
    setTodos(updateTodos);
  };

  return (
    <>
      <TodoTitle>Todo</TodoTitle>
      <form onSubmit={onSubmitCreateTodo}>
        <TodoInput
          data-testid="new-todo-input"
          onChange={onChangeTodoInput}
          value={newTodo}
        />
        <AddButton data-testid="new-todo-add-button">추가</AddButton>
      </form>
      <TodoListWrapper>
        {todos &&
          todos.map(todoData => (
            <TodoList key={todoData.id} todoData={todoData} />
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
