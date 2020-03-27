
import store from "../redux/store";



export const listenManager = (json, history) =>
{
    switch(json.action)
    {
        case "login":
            LoginListener(json, history);
            break;


        default:
            console.log("default case ")
    }
};

const LoginListener=(json,history)=> {
    if(json.Success){
        store.dispatch(login());
        history.push("/Rooms");
    }else{
        alert("Error")
    }
};

