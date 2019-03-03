import React, {Component} from "react";

import "./messageInput.scss"


class MessageInput extends Component {
    render() {
        return (
            <div className="messageInput">
                <input onKeyDown={this.props.send}/>
            </div>
        );
    }
}

export default MessageInput;
