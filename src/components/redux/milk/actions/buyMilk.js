import { BUY_MILK } from "../milkType";

export const buyMilk = (number = 1) => {
  return {
    type: BUY_MILK,
    payload: number,
  };
};
