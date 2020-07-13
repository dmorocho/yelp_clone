export const apiURL = () => {
  return window.location.hostname === "localhost"
    ? "http://localhost:3005"
    : "https://yelp-clone-app.herokuapp.com";
};
