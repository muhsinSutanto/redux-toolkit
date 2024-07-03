import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../redux/features/counter/counterAction";
import { useEffect } from "react";

function Home() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterReducer);
  const test = useSelector((state) => state.counter);
  const { menuReducer } = useSelector((state) => state);

  const handleAdd = () => {
    dispatch(increment());
  };
  const handleMinus = () => {
    dispatch(decrement());
  };

  useEffect(() => {
    console.log(count);
  }, [count]);

  console.log("test", test);
  return (
    <>
      <h1> homepage</h1>
      <p>{count?.value}</p>
      {menuReducer.loading ? (
        <h1>Loading</h1>
      ) : (
        <h1>{menuReducer.menu.map((item) => item.name)}</h1>
      )}
      <button onClick={handleAdd}>tambah</button>
      <button onClick={handleMinus}>kurang</button>
    </>
  );
}

export default Home;
