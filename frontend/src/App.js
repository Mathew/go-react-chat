import React, {Component} from 'react';
import './App.css';
import {connect, sendMsg} from "./api";
import Header from "./components/header";
import Chat from "./components/chat";
import MessageInput from "./components/messageInput";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {chat: []}
    }

    componentDidMount() {
        connect((msg) => {
            console.log("New MessageInput");
            this.setState(prevState => ({
                chat: [...this.state.chat, msg]
            }));
            console.log(this.state);
        });
    }

    send(event) {
        if (event.keyCode === 13) {
            sendMsg(event.target.value);
            event.target.value = "";
        }
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Chat chat={this.state.chat}/>
                <MessageInput send={this.send}/>
            </div>
        );
    }
}

export default App;
