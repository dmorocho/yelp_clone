import React, { useEffect } from "./node_modules/react";
import { useSelector, useDispatch } from "./node_modules/react-redux";
import { selectResturant, fetchAllBiz } from "./resturantSlice";

const Resturants = () => {
  const resturants = useSelector(selectResturant);
  const dispatch = useDispatch();
  debugger;
  useEffect(() => {
    dispatch(fetchAllBiz());
  }, []);

  return <div>{/* <p>{resturants[0]}</p> */}</div>;
};
export default Resturants;
