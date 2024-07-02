import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./redux/features/counter/counterAction";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterReducer);
  const test = useSelector((state) => state.counter);

  const handleAdd = () => {
    dispatch(increment());
  };
  const handleMinus = () => {
    dispatch(decrement());
  };

  console.log("test", test);
  return (
    <>
      <h1> homepage</h1>
      <p>{count?.value}</p>
      <button onClick={handleAdd}>tambah</button>
      <button onClick={handleMinus}>kurang</button>
    </>
  );
}

export default App;
