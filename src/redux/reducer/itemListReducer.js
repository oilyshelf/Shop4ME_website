const itemListReducer = (state = [], action)=>{
    switch (action.type) {
        case "setItemList":
            state = action.param;
            return state;
        default:
            return state;
    }
};
export default itemListReducer;
