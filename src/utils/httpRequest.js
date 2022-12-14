import axios from "axios";

const httpRequest = axios.create({
    baseURL: "https://6397507a77359127a033d21c.mockapi.io/api/v1",
});

export default httpRequest;
