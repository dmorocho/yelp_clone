import React from "react";
import bar_cat from "../../bar_cat.png";
import burger_cat from "../../burger_cat.png";
import cafe_cat from "../../cafe_cat.png";
import pizza_cat from "../../pizza_cat.png";
import seafood_cat from "../../seafood_cat.png";
import "./catergory.css";
let imgs1 = [bar_cat, burger_cat, cafe_cat];
let tags1 = ["Bars", "Burger", "Cafe"];
let imgs2 = [pizza_cat, seafood_cat];
let tags2 = ["Pizza", "Seafood"];

const Category = () => {
  const mapcat = (imgs, tags) => {
    return imgs.map((img, i) => {
      return (
        <a className="category_link" href={`/search/${tags[i]}`}>
          <div className="singleCat_div">
            <img id="cat_img" alt={tags[i]} src={img}></img>
            <h3>{tags[i]}</h3>
          </div>
        </a>
      );
    });
  };

  return (
    <div className="Category">
      {/* <div id="categorysection_div"> */}
      <h3 id="title_h">Browse Businesses by Category</h3>
      <div className="category_div">{mapcat(imgs1, tags1)}</div>
      <div className="category_div">{mapcat(imgs2, tags2)}</div>
      {/* </div> */}
    </div>
  );
};

export default Category;
