import React from "react";
import SignUpFrom from "./SignUpForm";
import signup_image from "../../signup_image.png";
import "./SignUp.css";
import img from "../../yelpLogo.png";
import Footer from "../footer/Footer";

// import footer_cityscape from "../footer_cityscape.png";

const SignUp = () => {
  return (
    <div>
      <header>
        <div>
          <a href="/">
            <img alt="main logo" id="logo" src={img}></img>
          </a>
        </div>
      </header>
      <div id="mid_div">
        <div id="signup_div">
          <h3>Sign Up for Yelp</h3>
          <p>
            Connect with great local businesses By continuing, you agree to
            Yelp’s Terms of Service and acknowledge Yelp’s Privacy Policy.
          </p>
          <SignUpFrom />
        </div>
        <div>
          <img alt="sign up " src={signup_image}></img>
        </div>
      </div>
      <br></br>
      <hr></hr>
      <Footer />
    </div>
  );
};
export default SignUp;
// import React from "react";
// import Avatar from "@material-ui/core/Avatar";
// import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
// import Paper from "@material-ui/core/Paper";
// import Box from "@material-ui/core/Box";
// import Grid from "@material-ui/core/Grid";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// import signup_image from "../../signup_image.png";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     // height: "100vh",
//   },
//   image: {
//     backgroundImage: { signup_image },
//     backgroundRepeat: "no-repeat",
//     // backgroundColor:
//     //   theme.palette.type === "light"
//     //     ? theme.palette.grey[50]
//     //     : theme.palette.grey[900],
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   },
//   paper: {
//     margin: theme.spacing(8, 4),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// export default function SignInSide() {
//   const classes = useStyles();

//   return (
//     <Grid container component="main" className={classes.root}>
//       <CssBaseline />
//       <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//         <div className={classes.paper}>
//           <Avatar className={classes.avatar}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <form className={classes.form} noValidate>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />

//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.submit}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </form>
//         </div>
//       </Grid>
//       <Grid item xs={false} sm={4} md={7} className={classes.image} />
//     </Grid>
//   );
// }
