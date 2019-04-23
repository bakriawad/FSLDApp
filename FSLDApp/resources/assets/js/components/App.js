import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Container from "./steps/Container"



export default  class App extends Component {
    render () {
    return (
        <div>
                <Container />
        </div>
    )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))