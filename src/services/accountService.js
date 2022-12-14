import { Alert } from "react-native";
import httpRequest from "../utils/httpRequest";

export const createAccount = async (account) => {
    const response = await httpRequest.post("/account", account);
    return response.data;
};

export const checkLogin = async (userLogin) => {
    const response = await httpRequest.get("/account");
    const accountList = response.data;
    const accountLogin = accountList.find((account) => {
        return (
            account.email === userLogin.email && account.password === userLogin.password
        );
    });

    if (!accountLogin) {
        Alert.alert("Error", "Invalid email or password");
    }

    return accountLogin;
};
