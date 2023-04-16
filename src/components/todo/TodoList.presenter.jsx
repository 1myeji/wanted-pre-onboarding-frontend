import React from "react";
import { TodoListEl } from "./TodoList.styles";

const TodoListPresenter = ({
  modify,
  onClickModify,
  onClickDeleteTodo,
  onSubmitModify,
  onChangeModifyInput,
  onClickCompleted,
  todoData,
}) => {
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

export default TodoListPresenter;
