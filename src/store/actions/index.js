import { ACCOUNT } from "../../constants";
import Service from "../../services/common";

export function getInfo(user) {
    return (dispatch) => {
        Service.getInfo(user).then((response) => response.json())
            .then((responseJson) => {
                dispatch(getInformation(responseJson))
            }
            )
            .catch(error =>{
                dispatch(getInformation({title:"Error"})) 
            })
    };
}

export function getInformation(info) {
       return {
        type: ACCOUNT,
        info: info
    }
}