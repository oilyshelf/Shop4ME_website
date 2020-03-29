 const itemsReducer = (state = [], action)=>{
    switch (action.type) {
        case "setItems":
            state = action.param;
            return state;
        default:
            return state;
    }
};
 export default itemsReducer;
