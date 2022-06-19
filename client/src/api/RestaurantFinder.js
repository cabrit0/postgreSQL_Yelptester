import axios from "axios";

// ~proxy
export default axios.create({
  baseURL: "https://yelptester.herokuapp.com/api/v1/restaurants",
});

/* export default axios.create({
  baseURL: `http://localhost:3006/api/v1/restaurants`,
});
 */
