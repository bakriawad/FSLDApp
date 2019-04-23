import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export default  class Step3 extends Component {

    constructor(props)
    {
        super(props);
        this.goToNextStep = this.goToNextStep.bind(this);
    }

    render () {
    return (
        <div className={"step"} >
            <h3>Step 3: Final comments</h3>
            <div id={"step3"}>
                <div className="input-group-full">
                    <br/>
                    Do you fully understand agree that if you check or not check thee agree checkbox then the 'submit' button will still submit either way?<br></br>
                    <b>Notice:</b> Not checking or not does not matter, this whole thing is just a waste of space.
                    <br/>
                    <input type="checkbox" name="agreeCB" id="agreeCB" />
                    &nbsp;&nbsp;
                    Yes, I agree.
                    <br/>
                    
                    <div align="right">
                        <input className="btn-form" type="button" value="Submit" onClick={this.goToNextStep}/>
                    </div>
                </div>
            </div>
        </div>
    )
    }

    goToNextStep()
    {
        //checkbox doesn't really matter..
        document.getElementById("step3").style.height=0;
        this.props.goToNextStep();
    }
}