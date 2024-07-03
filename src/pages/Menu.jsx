import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMenu } from "../redux/features/menu/menuSlice";
import { useSelector } from "react-redux";

const Menu = () => {
  const dispatch = useDispatch();
  const { menuReducer } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getMenu());
  }, []);

  if (menuReducer.loading) {
    return <h1>Loading</h1>;
  }
  return (
    <div>
      <h1>Menu</h1>
      {menuReducer.menu.map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </div>
  );
};

export default Menu;
