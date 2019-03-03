import React, {Component} from "react";
import "./message.scss"


class Message extends Component {
    constructor(props) {
        super(props);
        let temp = JSON.parse(this.props.message);
        this.state = {
            message: temp
        };
    }

    render() {
        return <div className="message"><p className="me">{this.state.message.body}</p></div>;
    }

}

export default Message;