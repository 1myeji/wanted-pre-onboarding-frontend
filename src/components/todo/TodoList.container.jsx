import React, { useState } from "react";
import TodoListPresenter from "./TodoList.presenter";
import { deleteTodo, getTodos, updateTodo } from "../../api/api";

const TodoListContainer = ({ todoData, setTodos }) => {
  const [modify, setModify] = useState(false);
  const [modifyTodo, setModifyTodo] = useState("");

  const onClickModify = () => {
    setModify(!modify);
  };

  const onClickDeleteTodo = async () => {
    await deleteTodo(todoData?.id);
    const updateTodos = await getTodos();
    setTodos(updateTodos);
  };

  const onSubmitModify = async () => {
    const updateTodoRequest = {
      todo: modifyTodo,
      isCompleted: todoData?.isCompleted,
    };
    await updateTodo(todoData?.id, updateTodoRequest);
    const updateTodos = await getTodos();
    setTodos(updateTodos);
    setModify(!modify);
  };

  const onChangeModifyInput = event => {
    setModifyTodo(event.target.value);
  };

  const onClickCompleted = async () => {
    const updateTodoRequest = {
      todo: todoData?.todo,
      isCompleted: !todoData?.isCompleted,
    };
    await updateTodo(todoData?.id, updateTodoRequest);
    const updateTodos = await getTodos();
    setTodos(updateTodos);
  };

  return (
    <TodoListPresenter
      modify={modify}
      onClickModify={onClickModify}
      onClickDeleteTodo={onClickDeleteTodo}
      onSubmitModify={onSubmitModify}
      onChangeModifyInput={onChangeModifyInput}
      onClickCompleted={onClickCompleted}
      todoData={todoData}
    />
  );
};

export default TodoListContainer;
