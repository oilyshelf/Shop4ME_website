export const login = () =>
{
    return {
        type: "log_in"
    };
};

export const logout = () =>
{
    return {
        type: "log_out"
    };
};

export const setSessionID=(par)=>{
    return{
        type:"setSessionID",
        param:par
    }
};
export const setItems=(par)=>{
    return{
        type:"setItems",
        param:par
    }
};

export const setShoopingList=(par)=>{
    return{
        type:"setItemList",
        param:par
    }
};

export const setErrand=(par)=>{
    return{
        type:"setErrand",
        param:par
    }
};
export const setErrands=(par)=>{
    return{
        type:"setErrands",
        param:par
    }
};
