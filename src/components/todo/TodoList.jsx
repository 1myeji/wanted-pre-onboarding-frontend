import React, { useState } from "react";
import styled from "styled-components";

const TodoList = () => {
  const [modify, setModify] = useState(false);

  const onClickModify = () => {
    setModify(!modify);
  };

  return (
    <TodoListEl>
      {modify ? (
        <>
          <div>
            <label>
              <input type="checkbox" />
              <input data-testid="modify-input" className="modify_input" />
            </label>
          </div>
          <div>
            <button data-testid="submit-button">제출</button>
            <button data-testid="cancel-button" onClick={onClickModify}>
              취소
            </button>
          </div>
        </>
      ) : (
        <>
          <div>
            <label>
              <input type="checkbox" />
              <span>TODO 1</span>
            </label>
          </div>
          <div>
            <button data-testid="modify-button" onClick={onClickModify}>
              수정
            </button>
            <button data-testid="delete-button">삭제</button>
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
