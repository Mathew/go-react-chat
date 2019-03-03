import React, {Component} from 'react';

import Message from '../message/message'
import "./chat.scss"


class Chat extends Component {
    render() {
        const messages = this.props.chat.map(msg => <Message message={msg.data}/>);

        return (
            <div className="chat">
                <h2>Chat</h2>
                {messages}
            </div>
        );
    };
}

export default Chat;
