const socket = new WebSocket('ws://localhost:8080/ws');

let connect = (msgCallback) => {
    console.log("Attempting connection..");

    socket.onopen = () => {
        console.log("Successfully Connected.");
    };

    socket.onmessage = (msg) => {
        console.log(msg);
        msgCallback(msg);
    };

    socket.onclose = (event) => {
        console.log("Socket closed connection: ", event)
    };

    socket.onerror = (error) => {
        console.log("Socket Error: ", error)
    };
};

let sendMsg = (msg) => {
    console.log("sending msg: ", msg);
    socket.send(msg);
};

export { connect, sendMsg }
