import axios from "axios";

const api = axios.create({
    baseURL: "https://denv-back.herokuapp.com",
});

export default api;