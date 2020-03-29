
import store from "../redux/store";
import {login, logout, setErrand, setErrands, setItems, setSessionID, setShoopingList} from "../redux/actions";


export const listenManager = (json, history) =>
{
    switch(json.action)
    {
        case "login":
            LoginListener(json, history);
            break;
        case "logout":
            logoutLis(json, history);
            break;
        case "register":
            registerLis(json, history);
            break;
        case "getItems":
            getItemsLis(json, history);
            break;
        case "getErrands":
            getErrandsLis(json, history);
            break;
        case "getErrand":
            getErrandLis(json, history);
            break;
        case "takeErrand":
            takeErrandLis(json, history);
            break;
        case "makeErrand":
            makeErrandLis(json, history);
            break;

        default:
            console.log("default case ")
    }
};

const LoginListener=(json,history)=> {
    if(json.Success){
        store.dispatch(login());
        store.dispatch(setSessionID(json.sessionID));
        history.push("/Rooms");
    }else{
        alert(json.error)
    }
};

const logoutLis =(json, history)=>{
    if (json.Success){
        store.dispatch(logout());
        store.dispatch(setSessionID(""));
        store.dispatch(setErrand({}));
        store.dispatch(setErrands([]));
        history.push("/")
    }else{
        alert("Something went wrong please try again")
    }
};

const registerLis=(json, history)=>{
    if(json.Success){
        alert("Successful");
        history.push("/login");
    }else {
        alert("Something went wrong please try again")
    }
};

const getItemsLis=(json, history)=>{
    store.dispatch(setItems(json.items))

};
const getErrandsLis=(json, history)=>{
    if(json.Success){
        store.dispatch(setErrands(json.errands));
    }else {
        store.dispatch(setErrands([]));
        alert(json.error);
    }
};
const getErrandLis=(json, history)=>{
    if(json.Success){
        store.dispatch(setErrand(json.errand));
        history.push("/Errand"+json.errand.errand_id);
    }else {
        alert("Something went wrong please try again")
    }
};

const takeErrandLis =(json, history)=>{
  if(json.Success){
      history.push("/myErrands");
      alert("Errand Accepted");
  }else {
      history.push("/Errands");
      alert("Errand already taken");
  }
};

const makeErrandLis=(json, history)=>{
  if(json.Success){
      store.dispatch(setShoopingList(""));
      history.push("/");
      alert("Your errand was created pls wait for a Notifaction from our Bringerteam");
  }else {
      alert("Something went wrong please try again")
  }
};
