import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: "8206bb793cbb42d985daa5e03d001766"
  }
})