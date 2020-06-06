import React from "react";
import bar_cat from "../../bar_cat.png";
import burger_cat from "../../burger_cat.png";
import cafe_cat from "../../cafe_cat.png";
import pizza_cat from "../../pizza_cat.png";
import seafood_cat from "../../seafood_cat.png";
import "./catergory.css";
let imgs = [bar_cat, burger_cat, cafe_cat, pizza_cat, seafood_cat];
let tags = ["Bars", "Burger", "Cafe", "Pizza", "Seafood"];
const Category = () => {
  let catdisplay = imgs.map((img, i) => {
    return (
      <div className="singleCat_div">
        <img alt={tags[i]} src={img}></img>
        <h3>{tags[i]}</h3>
      </div>
    );
  });
  return (
    <div className="Category">
      {/* <div id="categorysection_div"> */}
      <h3>Browse Businesses by Category</h3>
      <div id="category_div">{catdisplay}</div>
      {/* </div> */}
    </div>
  );
};

export default Category;
