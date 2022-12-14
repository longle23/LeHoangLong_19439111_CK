import { Alert } from "react-native";
import httpRequest from "../utils/httpRequest";

export const checkName = async (account) => {
    const response = await httpRequest.get("/accountBank");
    const accountBankList = response.data;

    const accountBank = accountBankList.find((item) => {
        return item.bank === account.bank && item.account === account.account;
    });

    let name = accountBank ? accountBank.name : Alert.alert("Account not found");

    return name;
};
