import { instance } from "./instance";

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
