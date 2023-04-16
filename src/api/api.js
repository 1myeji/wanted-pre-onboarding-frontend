import { authInstance, instance } from "./instance";

export const signUpApi = async signUpRequest => {
  try {
    const res = await instance.post("/auth/signup", signUpRequest);
    console.log(res);
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const signInApi = async signInRequest => {
  try {
    const res = await instance.post("/auth/signin", signInRequest);
    console.log(res);
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getTodos = async () => {
  try {
    const res = await authInstance.get("/todos");
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createTodo = async createTodoRequest => {
  try {
    const res = await authInstance.post("/todos", createTodoRequest);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteTodo = async id => {
  try {
    const res = await authInstance.delete(`/todos/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateTodo = async (id, updateTodoRequest) => {
  try {
    const res = await authInstance.put(`/todos/${id}`, updateTodoRequest);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
