import axios from "axios";

export default axios.create({
  baseURL: "https://the--pantry.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
  
});