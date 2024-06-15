import { CREATE_MILK } from "../milkType";

export const createMilk = (number = 1) => {
  return {
    type: CREATE_MILK,
    payload: number,
  };
};
