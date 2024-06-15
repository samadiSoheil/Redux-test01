import { BUY_MILK, CREATE_MILK } from "./milkType";

const initialMilkState = {
  numOfMilk: 10,
};

export const milkReducer = (state = initialMilkState, action) => {
  switch (action.type) {
    case BUY_MILK:
      return {
        ...state,
        numOfMilk: state.numOfMilk - action.payload,
      };
    case CREATE_MILK:
      return {
        ...state,

        numOfMilk: state.numOfMilk + action.payload,
      };

    default:
      return { ...state };
  }
};
