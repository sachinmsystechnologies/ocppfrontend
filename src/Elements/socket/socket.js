import {
    AuthPayload,
    StartTransationPayload,
    StopTransationPayload,
    HearbeatPayload,
    BootNotificationPayload,
    MeterValuePayload
} from './resource';

const ChagingSationEndpoit = `ws://localhost:8887/websocket/CentralSystemService/ChargePointID`;
const AdminPotalEndpoit = `ws://localhost:8888/websocket/CentralSystemService/ChargePointID`;

let SOCKET = null;


const EMIT_EVENT = (payload) => {
    try {
        SOCKET.send(payload);
        return true;
    } catch (error) {
        console.log("error in Emitting event", error);
        return false;
    }
}

const connect = () => connection(ChagingSationEndpoit);
const connectAdmin = () =>  connection(AdminPotalEndpoit);

const connection = async (data, options = {}) => {
    const ws = await new WebSocket(data, ["ocpp2.0", "ocpp1.5"])
    ws.onopen = (e) => {
        console.log('connected on wsServer');
        SOCKET = ws;
        return
    }
    ws.onmessage = function (info) {
        const test = JSON.parse(info.data);
        // console.log(test)
        if (test.eventType != 'HEARTBEAT' && test.eventType != 'METER VALUE') {
            console.log('Transaction: ' + JSON.stringify(info.data));
        }

    }
    ws.onerror = (e) => {
        console.log(e);
    }
    ws.onclose = async (e) => {
        alert("Disconnect");
    }
    return ws;
}
const autoPulling = () => {
    console.log("auo pulling event")
    EMIT_EVENT('sampleEvent');
};
const disConnect = () => {
    if (SOCKET?.connected) SOCKET.close();
    SOCKET = null;
    console.log(SOCKET)
};

const bootNotification = () => EMIT_EVENT(BootNotificationPayload);
const authorize = () => EMIT_EVENT(AuthPayload);
const startTranction = () => EMIT_EVENT(StartTransationPayload);
const updateTranction = (UpdateTransationPayload) => EMIT_EVENT(UpdateTransationPayload);
const stopTransaction = () => EMIT_EVENT(StopTransationPayload);
const Heartbeat = () => EMIT_EVENT(HearbeatPayload);
const MeterValue = () => EMIT_EVENT(MeterValuePayload);


export {
    connect,
    connectAdmin,
    authorize,
    startTranction,
    updateTranction,
    stopTransaction,
    bootNotification,
    MeterValue,
    Heartbeat,
    disConnect,
    autoPulling,
    AdminPotalEndpoit

}

