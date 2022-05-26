import axios from "axios";
export default axios.create({
    baseURL: "http://localhost:4000/api",
    headers: {
        "Access-Control-Allow-Origin" : "*" ,
        "Content-type": "application/json"
    }
});