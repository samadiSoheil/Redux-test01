import { BUY_CAKE, CREATE_CAKE } from "./cakeTypes";

const initialState = {
  numOfCake: 10,
};

export const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCake:
          state.numOfCake - action.payload <= 0 ? 0 : state.numOfCake - action.payload,
      };
    case CREATE_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake + action.payload,
      };

    default:
      return { ...state };
  }
};
