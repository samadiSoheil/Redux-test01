import { Provider } from "react-redux";
import "./App.css";
import Cake from "./components/Cake";
import { store } from "./components/redux/store";
import Milk from "./components/Milk";
import User from "./components/User";

function App() {
  return (
    <>
      <Provider store={store}>
        <Cake />
        <Milk />
        <br />
        <br />
        <hr />
        <User />
      </Provider>
    </>
  );
}

export default App;
