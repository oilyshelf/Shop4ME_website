import React, {useState} from "react";
import "./Register.css"

function Register() {

    const [RegisterInfo, setRegistration] = useState({email:"", passwort:"", passwort2:""});

    const [adressInfo, setAdress] = useState({adress:"",Hausnummer:"", PLZ:"",Ort:"", Bundesland:""});

    const emailChanger =(event)=>{
        setRegistration({
            email: event.target.value,
            password: RegisterInfo.password,
            password2: RegisterInfo.password2
        });
    };

    const passwordChanger =(event)=>{
        setRegistration({
            email: RegisterInfo.email,
            password: event.target.value,
            password2: RegisterInfo.password2
        });
    };

    const password2Changer =(event)=>{
        setRegistration({
            email: RegisterInfo.email,
            password: RegisterInfo.password,
            password2: event.target.value
        });
    };

    const adressChanger =(event)=>{
        setAdress({
            adress: event.target.value,
            Hausnummer: adressInfo.Hausnummer,
            PLZ: adressInfo.PLZ,
            Ort: adressInfo.Ort,
            Bundesland: adressInfo.Bundesland
        });
    };

    const HausnummerChanger =(event)=>{
        setAdress({
            adress: adressInfo.adress,
            Hausnummer: event.target.value,
            PLZ: adressInfo.PLZ,
            Ort: adressInfo.Ort,
            Bundesland: adressInfo.Bundesland
        });
    };

    const PLZChanger =(event)=>{
        setAdress({
            adress: adressInfo.adress,
            Hausnummer: adressInfo.Hausnummer,
            PLZ: event.target.value,
            Ort: adressInfo.Ort,
            Bundesland: adressInfo.Bundesland
        });
    };

    const OrtChanger =(event)=>{
        setAdress({
            adress: adressInfo.adress,
            Hausnummer: adressInfo.Hausnummer,
            PLZ: adressInfo.PLZ,
            Ort: event.target.value,
            Bundesland: adressInfo.Bundesland
        });
    };

    const BundeslandChanger =(event)=>{
        setAdress({
            adress: adressInfo.adress,
            Hausnummer: adressInfo.Hausnummer,
            PLZ: adressInfo.PLZ,
            Ort: adressInfo.Ort,
            Bundesland: event.target.value
        });
    };


    const sendRegisterDaten=()=>{
        console.log(RegisterInfo.email + " "+ RegisterInfo.password + " " + RegisterInfo.passwort2);
        console.log(adressInfo.adress +" "+ adressInfo.Hausnummer +" "+ adressInfo.PLZ +" "
            +adressInfo.Ort +" "+ adressInfo.Bundesland);
    };







    return(
        <div className="Register">
            <h1>Register</h1>
            <div>
                <input  value={RegisterInfo.email} placeholder="E-Mail" onChange={emailChanger.bind(this)}/>
                <input  value={RegisterInfo.password} placeholder="Passwort" onChange={passwordChanger.bind(this)}/>
                <input  value={RegisterInfo.password2} placeholder="Passwort wiederholen" onChange={password2Changer.bind(this)}/>
                <input  value={adressInfo.adress} placeholder="Adresse" onChange={adressChanger.bind(this)}/>
                <input  value={adressInfo.Hausnummer} placeholder="Nr." onChange={HausnummerChanger.bind(this)}/>
                <input  value={adressInfo.PLZ} placeholder="PLZ" onChange={PLZChanger.bind(this)}/>
                <input  value={adressInfo.Ort} placeholder="Ort" onChange={OrtChanger.bind(this)}/>
                <input  value={adressInfo.Bundesland} placeholder="Bundesland" onChange={BundeslandChanger.bind(this)}/>


                <button  onClick={sendRegisterDaten}>Registrieren</button>
            </div>
        </div>
    );
}

export default Register;
