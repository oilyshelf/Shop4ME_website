const errandsReducer = (state = [], action)=>{
    switch (action.type) {
        case "setErrands":
            state = action.param;
            return state;
        default:
            return state;
    }
};
export default errandsReducer;
