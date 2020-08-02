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
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    // maxWidth: "100%",
    // maxHeight: "100%",
    width: "128px",
    height: "128px",
  },
}));

const Resturants = () => {
  const Searches = useSelector(selectResturant);
  const dispatch = useDispatch();
  const history = useHistory();
  let { term } = useParams();
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
    debugger;
    return (
      // <a
      //   id="resTag"
      //   href={`/Resturantpage/${rest.bizid[0]}`}
      //   key={rest.bizid[0]}
      // >
      //   <div className="single_rest_div" id={rest.id} key={rest.id}>
      //     <div className="rest_image_div">
      //       <img
      //         id={rest.bizid[0]}
      //         src={rest.images[0]}
      //         className="rest_img"
      //       ></img>
      //     </div>
      //     <div className="about">
      //       <h1>
      //         <bold>
      //           {i + 1}. {rest.name}
      //         </bold>
      //       </h1>
      //       <h3>{rest.categories[0]}</h3>
      //       <div className="info">
      //         <h3>{rest.phone_number[0]}</h3>
      //         <h3>{rest.address[0]}</h3>
      //         <h1>REST CARD</h1>
      //         <div class="rating" data-rating={rest.rating}>
      //           <i class="star-1">★</i>
      //           <i class="star-2">★</i>
      //           <i class="star-3">★</i>
      //           <i class="star-4">★</i>
      //           <i class="star-5">★</i>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </a>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <img
                style={{ width: "128px" }}
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
                    Full resolution 1920x1080 • JPEG
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    ID: 1030114
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    Remove
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">$19.00</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  });

  return (
    <div className="main_resturant_div">
      {Searches.length ? (
        displaySearches
      ) : (
        <p>No Results Found Search Something else</p>
      )}
    </div>
  );
};
export default Resturants;
