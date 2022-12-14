import httpRequest from "../utils/httpRequest";

export const getBikes = async () => {
    const res = await httpRequest.get("/Bike");
    return res.data;
};


