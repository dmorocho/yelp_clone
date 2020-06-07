import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectResturant, searchBiz } from "./resturantSlice";

const Resturants = () => {
  const resturants = useSelector(selectResturant);
  const dispatch = useDispatch();
  let term = "seafood";

  useEffect(() => {
    dispatch(searchBiz(term));
  }, []);

  return <div>{/* <p>{resturants[0]}</p> */}</div>;
};
export default Resturants;
