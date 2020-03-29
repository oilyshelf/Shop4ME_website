const sessionIDReducer =(state = "", action)=>{
    switch (action.type) {
        case "setSessionID":
            state = action.param;
            return state;
        default:
            return state
    }
};

export default sessionIDReducer;
