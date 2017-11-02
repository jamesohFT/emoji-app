import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Emojis from './Emojis.js';
import emojiList from './emojiList.json'


class App extends Component { 
    constructor (props) {
        super(props);
        //set states
        this.state = {
            list: emojiList,
            input: ''
        }
        //setuping your own custom functions
        this.inputHandler = this.inputHandler.bind(this);
    }
    inputHandler (event) {
      //updating the state/value of input 
      this.setState({
        input : event.target.value
      })  
    }
    render () {
        return (
            <div className="app">
                <input className="searchBar" placeHolder="Search Emoji" onChange={this.inputHandler}/>
                <Emojis parentState={this.state.list}/>
            </div>
        )
    }
}

export default App;