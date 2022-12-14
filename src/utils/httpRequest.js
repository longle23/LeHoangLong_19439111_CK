import axios from "axios";

const httpRequest = axios.create({
    baseURL: "https://63477bf70484786c6e8147db.mockapi.io/api/",
});

export default httpRequest;
