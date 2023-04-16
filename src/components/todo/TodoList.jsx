import React, { useState } from "react";
import styled from "styled-components";
import { deleteTodo, getTodos, updateTodo } from "../../api/api";

const TodoList = ({ todoData, setTodos }) => {
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
    <TodoListEl>
      {modify ? (
        <>
          <div>
            <label>
              <input
                type="checkbox"
                onClick={onClickCompleted}
                defaultChecked={todoData?.isCompleted}
              />
              <input
                data-testid="modify-input"
                className="modify_input"
                onChange={onChangeModifyInput}
                defaultValue={todoData?.todo}
              />
            </label>
          </div>
          <div>
            <button data-testid="submit-button" onClick={onSubmitModify}>
              제출
            </button>
            <button data-testid="cancel-button" onClick={onClickModify}>
              취소
            </button>
          </div>
        </>
      ) : (
        <>
          <div>
            <label>
              <input
                type="checkbox"
                onClick={onClickCompleted}
                defaultChecked={todoData?.isCompleted}
              />
              <span>{todoData?.todo}</span>
            </label>
          </div>
          <div>
            <button data-testid="modify-button" onClick={onClickModify}>
              수정
            </button>
            <button data-testid="delete-button" onClick={onClickDeleteTodo}>
              삭제
            </button>
          </div>
        </>
      )}
    </TodoListEl>
  );
};

export default TodoList;

const TodoListEl = styled.li`
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
