import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../redux/features/counter/counterAction";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [image, setImage] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("slip", image);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
      },
    };

    const orderId = 5720;

    try {
      const response = await axios.put(
        `https://api-car-rental.binaracademy.org/customer/order/${orderId}/slip`,
        formData,
        config
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleImage = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };
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

      <div>
        <input onChange={handleImage} type="file" />
        <button onClick={handleSubmit}>submit</button>
      </div>

      <img src={image} alt="" />
      <div>
        <p>{test}</p>
        <p>{menuReducer.menu.map((item) => item.name)}</p>
        <p>{menuReducer.menu.map((item) => item.price)}</p>
      </div>
    </>
  );
}

export default Home;
