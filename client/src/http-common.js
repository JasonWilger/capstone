import axios from "axios";

export default axios.create({
  baseURL: "http://drona.db.elephantsql.com",
  headers: {
    "Content-type": "application/json"
  }
  
});