

 const logginReducer = (state = false, action)=>{
    switch (action.type) {
        case "log_in":
                state = true;
            return  state;
        case "log_out":
            state = false;
            return  state;

        default:
            return state;
    }
};

export default logginReducer;