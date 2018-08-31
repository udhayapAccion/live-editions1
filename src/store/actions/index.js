import { ACCOUNT } from "../../constants";
import Service from "../../services/common";

export function getAccount(user) {
    return (dispatch) => {
        Service.getAccount(user).then((response) => response.json())
            .then((responseJson) => {
                dispatch(accountDetails(responseJson))
            }
            )
            .catch(error =>{
                dispatch(accountDetails("response")) 
            })
    };
}

export function accountDetails(account) {
    alert("sdg");
    return {
        type: ACCOUNT,
        account: {name:"udhaya"}
    }
}