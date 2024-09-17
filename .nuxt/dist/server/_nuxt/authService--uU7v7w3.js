import axios from "axios";
axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  // Replace with your API base URL
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
//# sourceMappingURL=authService--uU7v7w3.js.map
