import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectResturant, searchBiz } from "./resturantSlice";
import { useHistory, useParams } from "react-router-dom";
import {
  Paper,
  ButtonBase,
  Typography,
  Grid,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./resturants.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
    marginBottom: 10,
  },
  // image: {
  //   width: 128,
  //   height: 128,
  // },
  img: {
    margin: "auto",
    display: "block",
    // maxWidth: "100%",
    // maxHeight: "100%",
    width: 256,
    height: 144,
  },
}));

const Resturants = ({ Searches }) => {
  // const Searches = useSelector(selectResturant);
  const dispatch = useDispatch();
  const history = useHistory();
  let { term } = useParams();
  let displayBuget = ["$", "$$", "$$$"];
  const handleClick = (e) => {
    history.push(`/Resturantpage/${e.target.id}`);
  };
  const classes = useStyles();

  // useEffect(() => {
  //   const getbiz = async () => {
  //     dispatch(searchBiz(term));
  //   };
  //   getbiz();
  // }, []);

  let displaySearches = Searches.map((rest, i) => {
    return (
      <a href={`/Resturantpage/${rest.bizid[0]}`} className="biz-card">
        <div className={classes.root}>
          <Paper
            className={classes.paper}
            id={rest.bizid[0]}
            key={rest.bizid[0]}
          >
            <Grid container spacing={2}>
              <Grid item>
                <img
                  style={{ width: "69px" }}
                  id="image"
                  className={classes.media}
                  src={rest.images[0]}
                />
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      {`${i + 1}.${rest.name} `}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <div class="rating" data-rating={rest.rating}>
                        <i class="star-1">★</i>
                        <i class="star-2">★</i>
                        <i class="star-3">★</i>
                        <i class="star-4">★</i>
                        <i class="star-5">★</i>
                      </div>
                    </Typography>
                    <Typography variant="body2" style={{ cursor: "pointer" }}>
                      {displayBuget[Number(rest.budget) - 1]}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item style={{ width: "150px" }}>
                  <Typography variant="caption">
                    {rest.phone_number[0]}
                    <br></br>
                    {rest.address[0]}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </a>
    );
  });

  return (
    <div className="main_resturant_div">
      <h2 style={{ padding: "5px" }}>Results for {term}</h2>
      {Searches.length ? (
        displaySearches
      ) : (
        <p>No Results Found Search Something else</p>
      )}
    </div>
  );
};
export default Resturants;
