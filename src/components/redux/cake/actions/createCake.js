import { CREATE_CAKE } from "../cakeTypes";

export const createCake = (number = 1) => {
  return {
    type: CREATE_CAKE,
    payload: number,
  };
};
