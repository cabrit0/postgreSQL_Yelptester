import axios from "axios";

export default axios.create({
  baseURL:
    "postgres://soodckkrslmhrv:a19ddb19db1c542090a6bb96d5e861b97d984df301bb1b029cb7b4c4b637d04a@ec2-52-73-184-24.compute-1.amazonaws.com:5432/dbjjmastgb68bc/api/v1/restaurants",
});
