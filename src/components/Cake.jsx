import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "./redux/cake/actions/buyCake";
import { createCake } from "./redux/cake/actions/createCake";

const Cake = () => {
  const { cake } = useSelector((initialState) => initialState);
  // console.log(cake);
  const dispatch = useDispatch();
  return (
    <>
      <h2>there are {cake.numOfCake} cake...</h2>
      <button disabled={cake.numOfCake < 1} onClick={() => dispatch(buyCake())}>
        buy cake
      </button>
      <button onClick={() => dispatch(createCake())}>create cake</button>
    </>
  );
};

export default Cake;
