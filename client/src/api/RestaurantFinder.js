import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:3006/api/v1/restaurants",
});
