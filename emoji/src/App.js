import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Emojis from './Emojis.js'

class App extends Component { 
    constructor (props) {
        super(props);
        this.state = {
            list: [],
            input: ''
        }
    }

    render () {
        return (
            <div className="app">
                <input className="searchBar" placeHolder="Search Emoji"/>
                <Emojis />
            </div>
        )
    }
}

export default App;
