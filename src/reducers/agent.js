const defaultInfo = [];

export default (state = defaultInfo, action) => {
    switch (action.type) {
        case "AGENT_INFO": {
            return [
                ...state,
                action.info
            ];
        }
        default:
            return state;
    }
}