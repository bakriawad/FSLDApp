import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export default  class Step2 extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            comments:""
        }

        this.handleUserInput = this.handleUserInput.bind(this);
        this.goToNextStep = this.goToNextStep.bind(this);
    }


    render () {
    return (
        <div className={"step"}>
            <h3>Step 2: More comments</h3>
            <div id={"step2"}>
                <div className="input-group-full">
                    <label htmlFor="comments">Comments</label>
                    <textarea name="comments" required placeholder="Comments..." onChange={(event) => this.handleUserInput(event)}></textarea>

                    
                    <div align="right">
                            <input className="btn-form" type="button" value="Next >" onClick={this.goToNextStep}/>
                    </div>
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

    goToNextStep()
    {
        document.getElementById("step2").style.height=0;
        this.props.goToNextStep(this.state);
    }
}