import { useDispatch, useSelector } from "react-redux";
import { buyMilk } from "./redux/milk/actions/buyMilk";
import { createMilk } from "./redux/milk/actions/createMilk";

const Milk = () => {
  const milk = useSelector((milks) => milks.milk);
  // console.log(milk);
  const dispatch = useDispatch();
  return (
    <>
      <h2>there are {milk.numOfMilk} milk...</h2>
      <button disabled={milk.numOfMilk < 1} onClick={() => dispatch(buyMilk())}>
        buy milk
      </button>

      <button onClick={() => dispatch(createMilk())}>create milk</button>
    </>
  );
};

export default Milk;
