import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Axios from "axios"
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"

export default  class App extends Component {

    constructor() 
    {
        super();
        this.state = 
        {
            fname:"",
            sname:"",
            email:"",
            phone:"",
            gender:"",
            dob:"",
            comments:""
        };

        this.setState = this.setState.bind(this);
        this.goToStep2 = this.goToStep2.bind(this);
        this.goToStep3 = this.goToStep3.bind(this);
        this.submit = this.submit.bind(this);
        this.reply = this.reply.bind(this);
    }

    render () {
        return (
            <BrowserRouter>
            <div className={"container"}>
                <Step1 goToNextStep={this.goToStep2}/>
                <Step2 goToNextStep={this.goToStep3}/>
                <Step3 goToNextStep={this.submit}/>
            </div>
            </BrowserRouter>
        )
    }
    
    goToStep2(state){
        console.log("switching to step 2");
        document.getElementById("step2").style.height="auto";
        this.setState(state);
    }
    
    goToStep3(state){
        console.log("switching to step 3");
        document.getElementById("step3").style.height="auto";
        this.setState({comments:state.comments});
    }

    submit(){
        console.log("Submtting");
        const url ="api/addUser";
        //VHost:
        //const url ="http://127.0.0.1/api/addUser"

        $.ajax({
            url:url,
            type:"post",
            data:this.state,
            success:this.reply,
            error:function(){alert("connection error")}
        });
        
    }

    reply(reply)
    {
        //check the returned status from the server
        var serverReply;
        try{
            serverReply = JSON.parse(reply);
            if(serverReply.status){alert("Added successfully.")}
            else {alert("Operation failed miserably.\n did you forget something in the server config?");};
        }catch(e){
            alert("invalid server response");
        }
        console.log(reply);
    }
}

