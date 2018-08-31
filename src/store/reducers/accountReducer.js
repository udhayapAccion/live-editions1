import { ACCOUNT } from "../../constants";
const initialState = {
    account: {},
    result: {},
}

export default function getAccount(state = initialState, action) {
    switch (action.type) {
        case ACCOUNT:
            return {
                ...state,
                account: action.account
            };

        default:
            return {
                ...state
            };
    }
};
