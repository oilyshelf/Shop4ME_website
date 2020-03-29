const errandReducer = (state = {}, action)=>{
    switch (action.type) {
        case "setErrand":
            state = action.param;
            return state;
        default:
            return state;
    }
};
export default errandReducer;
