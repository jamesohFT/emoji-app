import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Emojis from './Emojis.js';
import emojiList from './emojiList.json'


class App extends Component { 
    //constructor
    constructor (props) {
        super(props);
        //set states
        this.state = {
            list: [],
            input: ''
        }
        //setuping your own custom functions
        this.inputHandler = this.inputHandler.bind(this);
        this.handleEmojiClick = this.handleEmojiClick.bind(this);
    }

    //method
    handleEmojiClick (event){
      var emoji = event.target.innerHTML
      var emojiNode = event.target;

      emojiNode.style.backgroundColor = "red";

      
      //window.prompt("Copy to clipboard: Cmd+C, Enter", emoji);


       
      var textArea = document.createElement('textarea');
      textArea.textContent = emoji;
      document.body.appendChild(textArea);
      textArea.select();

      document.execCommand('copy');
      document.body.removeChild(textArea);
    }

    inputHandler (event) {
      //updating the state/value of input 
      var input = event.target.value.toLowerCase();

      var newArray = emojiList.filter(function (emojiObject){
            if (emojiObject.keywords.includes(input)){
                if(input === '') return;
                else return emojiObject;
            }
      })

      //console.log(newArray);

      this.setState({
        input : input,
        list : newArray
      })  
    }
    render () {
        return (
            <div className="app">
                <input className="searchBar" placeHolder="Search Emoji" onChange={this.inputHandler}/>
                {<Emojis
                  parentState={this.state.list}
                  handleEmojiClick={this.handleEmojiClick}
                />}
            </div>
            

        )
    }
}

export default App;