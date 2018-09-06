import { ACCOUNT } from "../../constants";
const initialState = {
    account: {},
    result: {},
}

export default function getInfo(state = initialState, action) {
    switch (action.type) {
        case ACCOUNT:
            return {
                ...state,
                info: action.info
            };

        default:
            return {
                ...state
            };
    }
};
