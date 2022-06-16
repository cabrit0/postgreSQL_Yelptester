import axios from "axios";

export default axios.create({
  baseURL: "https://yelptester.herokuapp.com//api/v1/restaurants",
});
