import React, {useState} from "react";
import "./Register.css"
import {Select} from 'antd';
import {Button} from "antd";
import {Input} from "antd";
import logo from "../../Bilder/register.png";

function Register(probs) {

    const [RegisterInfo, setRegistration] = useState({email:"", passwort:"", passwort2:"", Vorname:"", Nachname:""});

    const [adressInfo, setAdress] = useState({adress:"",Hausnummer:"", PLZ:"",Ort:"", Bundesland:""});

    const emailChanger =(event)=>{
        setRegistration({
            email: event.target.value,
            password: RegisterInfo.password,
            password2: RegisterInfo.password2,
            Vorname: RegisterInfo.Vorname,
            Nachname: RegisterInfo.Nachname
        });
    };

    const passwordChanger =(event)=>{
        setRegistration({
            email: RegisterInfo.email,
            password: event.target.value,
            password2: RegisterInfo.password2,
            Vorname: RegisterInfo.Vorname,
            Nachname: RegisterInfo.Nachname
        });
    };

    const password2Changer =(event)=>{
        setRegistration({
            email: RegisterInfo.email,
            password: RegisterInfo.password,
            password2: event.target.value,
            Vorname: RegisterInfo.Vorname,
            Nachname: RegisterInfo.Nachname
        });
    };

    const VornameChanger =(event)=>{
        setRegistration({
            email: RegisterInfo.email,
            password: RegisterInfo.password,
            password2: RegisterInfo.passwort2,
            Vorname: event.target.value,
            Nachname: RegisterInfo.Nachname
        });
    };

    const NachnameChanger =(event)=>{
        setRegistration({
            email: RegisterInfo.email,
            password: RegisterInfo.password,
            password2: RegisterInfo.passwort2,
            Vorname: RegisterInfo.Vorname,
            Nachname: event.target.value
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

    const BundeslandChanger =(value)=>{
        setAdress({
            adress: adressInfo.adress,
            Hausnummer: adressInfo.Hausnummer,
            PLZ: adressInfo.PLZ,
            Ort: adressInfo.Ort,
            Bundesland: value
        });
    };


    const sendRegisterDaten=()=>{
        console.log(RegisterInfo.email + " "+ RegisterInfo.password + " " + RegisterInfo.passwort2 +" "
            + RegisterInfo.Vorname +" "+ RegisterInfo.Nachname +" "+ adressInfo.adress +" "+ adressInfo.Hausnummer +" "
            + adressInfo.PLZ +" "+ adressInfo.Ort +" "+ adressInfo.Bundesland);
    };

    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
    };

    const { Option } = Select;

    const home=()=>{
        probs.history.push("/");
    };




    return(
        <div className="Register">



            <h1><img src={logo} width="180px" height="90px" align="center" alt="Register"/> <div> <Button type="primary"  onClick={home}>home</Button> </div></h1>
            <div>
                <Input className="Register" value={RegisterInfo.Vorname} placeholder="Vorname" onChange={VornameChanger.bind(this)}/>
                <Input className="Register" value={RegisterInfo.Nachname} placeholder="Nachname" onChange={NachnameChanger.bind(this)}/><br/>
                <Input className="Register" value={RegisterInfo.email} placeholder="E-Mail" onChange={emailChanger.bind(this)}/><br/>
                <Input className="Register" value={RegisterInfo.password} placeholder="Passwort" onChange={passwordChanger.bind(this)} type="password"/><br/>
                <Input className="Register" value={RegisterInfo.password2} placeholder="Passwort wiederholen" onChange={password2Changer.bind(this)} type="password"/><br/>



                <Input className="Register" value={adressInfo.adress} placeholder="Adresse" onChange={adressChanger.bind(this)}/>
                <Input className="Register" value={adressInfo.Hausnummer} placeholder="Nr." onChange={HausnummerChanger.bind(this)}/><br/>
                <Input className="Register" value={adressInfo.PLZ} placeholder="PLZ" onChange={PLZChanger.bind(this)}/><br/>
                <Input className="Register" value={adressInfo.Ort} placeholder="Ort" onChange={OrtChanger.bind(this)}/><br/>
                <Select className="Register" defaultValue={"Bayern"}  onChange={BundeslandChanger}>
                    <Option value = "Bayern">Bayern</Option>
                    <Option value = "Baden-Württemberg">Baden-Württemberg</Option>
                    <Option value = "Berlin">Berlin</Option>
                    <Option value = "Brandenburg">Brandenburg</Option>
                    <Option value = "Bremen">Bremen</Option>
                    <Option value = "Hamburg">Hamburg</Option>
                    <Option value = "Hessen">Hessen</Option>
                    <Option value = "Mecklenburg-Vorpommern">Mecklenburg-Vorpommern</Option>
                    <Option value = "Niedersachsen">Niedersachsen</Option>
                    <Option value = "Nordrhein-Westfalen">Nordrhein-Westfalen</Option>
                    <Option value = "Rheinland-Pfalz">Rheinland-Pfalz</Option>
                    <Option value = "Saarland">Saarland</Option>
                    <Option value = "Sachsen">Sachsen</Option>
                    <Option value = "Sachen-Anhalt">Sachen-Anhalt</Option>
                    <Option value = "Schleswig-Holstein">Schleswig-Holstein</Option>
                    <Option value = "Thüringen">Thüringen</Option>
                </Select><br/>

                {/*  Bundesland in selection umschreiben
                        rausfinden warum register.css für alle gilt */}

                <Button type="primary" className="Register" onClick={sendRegisterDaten}>Registrieren</Button>

            </div>

        </div>
    );
}

export default Register;
