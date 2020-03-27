/**
 * This class stores the websocket connection and the necessary listeners
 * use connect() for the init. connection
 * use command function to send the command to server
 * @author Rostislav Iskandirov
 */

import {listenManager} from "./Listener";

let ws ;
var timeout = 250;
let his;

//use this function to connect the websocket
export const connect = () => {
    //ws = new WebSocket("ws://localhost:8887");  //läuft erstmal über localhost
    ws = new WebSocket("ws://localhost:5555");
    var connectInterval;

    // websocket onopen event listener
    ws.onopen = () => {
        console.log("connected websocket main component");


        timeout = 250; // reset timer to 250 on open of websocket connection
        clearTimeout(connectInterval); // clear Interval on on open of websocket connection
    };

    // websocket onclose event listener
    ws.onclose = e => {
        console.log(
            `Socket is closed. Reconnect will be attempted in ${Math.min(
                10000 / 1000,
                (timeout + timeout) / 1000
            )} second.`,
            e.reason
        );

        timeout = timeout + timeout; //increment retry interval
        connectInterval = setTimeout(check, Math.min(10000, timeout)); //call check function after timeout
    };

    // websocket onerror event listener
    ws.onerror = err => {
        console.error(
            "Socket encountered error: ",
            err.message,
            "Closing socket"
        );

        ws.close();
    };

    ws.onmessage = ev => {


        const message = ev.data; // kriegt Daten vom socket
        const js = JSON.parse(message); //parse diese zum object
        console.log(message);

        listenManager(js, his);


    };



    return ws;
};


const check = () => {
    const wes = ws;
    if (!wes || wes.readyState === WebSocket.CLOSED) connect(); //check if websocket instance is closed, if so call `connect` function.
};

//use this function to send Commands to the server
 export const command =(jstring, history)=>{

      his = history; //save history to the Listener can use it
     //check if the websocket exist
     if (typeof ws === 'undefined') {
         connect();
     }
     //check if the websocket is connected else wait for the connection before sending
     if(ws.readyState === 1){
         ws.send(jstring);
     }else {

         waitForSocketConnection(ws,()=>{
             ws.send(jstring);
         });
     }






 };

// Make the function wait until the connection is made...

function waitForSocketConnection(socket, callback){
    setTimeout(
        function () {
            if (socket.readyState === 1) {
                console.log("Connection is made");
                if (callback != null){
                    setTimeout(()=>{
                        callback();
                    },100);

                }
            } else {
                console.log("wait for connection...");
                waitForSocketConnection(socket, callback);
            }

        }, 1000); // wait 5 milisecond for the connection...
}

