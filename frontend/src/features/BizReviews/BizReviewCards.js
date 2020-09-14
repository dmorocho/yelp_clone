import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { apiURL } from "../../util/apiURL";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 10,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 0,
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    // margin: "0",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function ReviewCards({ userid, rating, body }) {
  const classes = useStyles();
  const API = apiURL();
  const [reviewsUser, SetReviewsUser] = useState([]);

  useEffect(() => {
    debugger;
    const getbiz = async () => {
      try {
        let resReviews = await axios({
          method: "get",
          url: `${API}/api/users/${userid}`,
        });
        debugger;
        SetReviewsUser(resReviews.data.users[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getbiz();
  }, []);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <div className={classes.image}>
              <p>{`${reviewsUser.fname} ${reviewsUser.lastname} `}</p>

              {reviewsUser.profile_pic ? (
                <img
                  className={classes.img}
                  alt="complex"
                  src={reviewsUser.profile_pic}
                />
              ) : (
                <img
                  className={classes.img}
                  alt="complex"
                  src="https://s3-media0.fl.yelpcdn.com/photo/UprGxC9AJOUlu7EXsUwavA/60s.jpg"
                />
              )}
            </div>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <div className="rating" data-rating={rating}>
                  <i class="star-1">★</i>
                  <i class="star-2">★</i>
                  <i class="star-3">★</i>
                  <i class="star-4">★</i>
                  <i class="star-5">★</i>
                </div>

                <Typography variant="body2" gutterBottom>
                  {body}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
