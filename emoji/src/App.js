import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Emojis from './Emojis.js'

class App extends Component { 
    constructor (props) {
        super(props);
        this.state = {
            list: [1, 2, 3, 4, 5],
            input: 'test'
        }
    }

    render () {
        return (
            <div className="app">
                <input className="searchBar" placeHolder="Search Emoji"/>
                <Emojis parentState={this.state.input } parentState={this.state.list}/>
            </div>
        )
    }
}

<<<<<<< HEAD
//export default App;
=======
export default App;
>>>>>>> parent of bc88bef... clean file
