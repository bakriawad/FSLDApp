import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export default  class Step1 extends Component 
{

    constructor(props) {
        super(props);
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

        this.handleUserInput = this.handleUserInput.bind(this);
        this.validate = this.validate.bind(this);
        this.goToNextStep = this.goToNextStep.bind(this);

        console.log(this.props);
    }


    render () {
        return (
            <div className={"step"}  onChange={(event) => this.handleUserInput(event)}>
                <h3>Step 1: Your Details</h3>
                <div id={"step1"}>
                    <div className="input-group">
                        <label htmlFor="fname">First Name</label>
                        <input type="text" name="fname" onChange={(event) => this.handleUserInput(event)} required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="sname">Surname</label>
                        <input type="text" name="sname" onChange={(event) => this.handleUserInput(event)} required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" onChange={(event) => this.handleUserInput(event)} required />
                    </div>

                    
                    <div className="input-group">
                        <label htmlFor="phone">Phone number</label>
                        <input type="number" name="phone" onChange={(event) => this.handleUserInput(event)} required />
                    </div>

                    
                    <div className="input-group">
                        <label htmlFor="gender">Gender</label>
                        <select name="gender" onChange={(event) => this.handleUserInput(event)} required>
                            <option defaultValue hidden disabled>Please choose</option>
                            <option value="m">Male</option>
                            <option value="f">Female</option>
                            <option value="o">Other</option>
                        </select>
                    </div>

                    
                    <div className="input-group">
                        <label htmlFor="dob">Date of Birth</label>
                        <input type="text" name="dob" onChange={(event) => this.handleUserInput(event)} required placeholder="dd/mm/yyyy"/>
                    </div>

                    <div align="right">
                        <input className="btn-form" type="button" value="Next >" onClick={this.validate}/>
                    </div>
                </div>
            </div>
        )
    }


    handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
        
    }


    validate()
    {
        console.log(this.state);
        //validate form
        var valid = true;
        //preset error message
        var errMsg="Please fill the form correctly, your errors are:\n";

        //first name
        if(this.state.fname.length <1){
            valid=false;
            errMsg += "\n* Please enter a first name.";
        }
        
        //check surname
        if(this.state.sname.length <1){
            valid=false;
            errMsg += "\n* Please enter a surname.";
        }

        //Check mai
        const MRE = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(this.state.email.length <3 || this.state.email.match(MRE)==null){
            valid=false;
            errMsg += "\n* Please enter a valid email (example@example.com).";
        }

        //Check phone
        if(this.state.phone.length != 11 || this.state.phone.substr(0,2)!="07"){
            valid=false;
            errMsg += "\n* Please enter a UK mobile number.";
        }

        //Check gender
        if(this.state.gender.length==0){
            valid=false;
            errMsg += "\n* Please select a gender.";
        }

        //Check date of birth
        const DOBRE = /(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/;
        if(this.state.dob.match(DOBRE)==null){
            valid=false;
            errMsg += "\n* Please enter your date of birth (dd/mm/yyyy).";
        }

        if(valid)
        {
            this.goToNextStep();
        }else{
            alert(errMsg);
        }

    }
    
    goToNextStep()
    {
        console.log("step1 pass, going next;");
        document.getElementById("step1").style.height=0;
        this.props.goToNextStep(this.state);
    }
}