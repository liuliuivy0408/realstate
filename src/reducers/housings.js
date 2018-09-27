const defaultHousings = [];

export default (state = defaultHousings, action) => {
    switch (action.type) {
        case "ADD_HOUSING": {
            return [
                ...state,
                action.housing
            ];
        }
        default:
            return state;
    }
}