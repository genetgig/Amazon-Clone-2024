import axios from "axios";

const axiosInstance = axios.create({
  // locla instance of firebase function
  // baseURL:"http://127.0.0.1:5001/clone-70b13/us-central1/api",
  
  // deployed version of amazon server on render.com
  baseURL: "https://amzon-api-deploy.onrender.com/"
});

export {axiosInstance};
