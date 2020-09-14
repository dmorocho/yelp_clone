import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectResturant, searchBiz } from "../resturants/resturantSlice";
import Resturants from "../resturants/ResturantsCard";
import Footer from "../footer/Footer";
import "./resultsPage.css";

//components
import Header from "../Header/Header";
import Filters from "../Filters/Filter";

const ResultsPage = () => {
  const dispatch = useDispatch();
  let { term } = useParams();
  const Searches = useSelector(selectResturant);

  const [orderby, setOrderby] = useState("all");
  const [currSearch, setCurrSearch] = useState([]);

  const [value, setValue] = useState({
    $: false,
    $$: false,
    $$$: false,
  });

  useEffect(() => {
    setCurrSearch(Searches);
  }, [Searches]);

  const handleOrderby = (e) => {
    e.preventDefault();
    // setCurrSearch(Searches);
    setOrderby(e.target.value);
    let resSearch = [...currSearch];
    orderbyFunction(resSearch, e.target.value);
  };

  const orderbyFunction = (newSearch, order) => {
    let resSearch = [...newSearch];
    if (order === "rating-low") {
      resSearch.sort(function (a, b) {
        return Number(a.rating) - Number(b.rating);
      });
    } else if (order === "rating-high") {
      resSearch.sort(function (a, b) {
        return Number(b.rating) - Number(a.rating);
      });
    }
    setCurrSearch(resSearch);
  };

  const handleValueChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.checked });

    applyFiler({ ...value, [event.target.name]: event.target.checked });
  };

  const applyFiler = (filterValue) => {
    let resSearch = [...Searches];

    const result = Object.values(filterValue).filter((val) => val === true);
    debugger;
    if (!result.length) {
      orderbyFunction(Searches, orderby);
    } else {
      orderbyFunction(applyNewFilter(resSearch, filterValue), orderby);
    }
  };
  const applyNewFilter = (resSearch, filterValue) => {
    debugger;
    let res = [];
    resSearch.forEach((biz) => {
      for (const val in filterValue) {
        debugger;
        if (filterValue[val]) {
          if (Number(biz.budget) === val.length) {
            res.push(biz);
          }
        }
      }
    });
    return res;
  };

  return (
    <div class="grid-container">
      <div class="header">
        <Header />
      </div>

      <div class="left">
        <Filters value={value} handleValueChange={handleValueChange} />
      </div>
      <div class="middle">
        <div class="custom-select" style={{ textAlign: "end" }}>
          <select value={orderby} onChange={handleOrderby}>
            <option value="all" disabled>
              Order By:
            </option>
            <option value="rating-high">Rating high</option>
            <option value="rating-low">Rating low</option>
          </select>
        </div>
        {/* <h2>Results for {term}</h2> */}
        <Resturants Searches={currSearch} />
      </div>
      <div class="right" style={{ width: "350px" }}>
        Map
      </div>

      <div class="footer">
        <Footer />
      </div>
    </div>
  );
};

export default ResultsPage;
