
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';
import {
    connect, authorize, startTranction,
    stopTransaction, disConnect
} from '../../Elements/socket/socket'


export default [
    {
        label: 'Connect',
        status: 'Connected',
        key:"connect",
        icon: <PlayCircleFilledWhiteOutlinedIcon />,
        event: connect
    },
    {
        label: 'Autherize',
        status: 'Connected & Autherize',
        key:"autherize",
        icon: <PlayCircleFilledWhiteOutlinedIcon />,
        event: authorize
    },
    {
        label: 'Plugin Cable',
        status: 'Cable Plugged in',
        key:"plugin",
        icon: <PlayCircleFilledWhiteOutlinedIcon />,
        event: startTranction

    },
    {
        label: 'Unplug Cable',
        status: 'Cable unPlugged',
        key:"unplugged",
        icon: <StopCircleOutlinedIcon />,
        event: stopTransaction
    },
    // {
    //     label: 'Heartbeat',
    //     status: 'Sent Heartbeat',
    //     key:"connect",
    //     icon: <MonitorHeartOutlinedIcon />,
    //     event: Heartbeat


    // },
    {
        label: 'Disconnect',
        status:'Not connected',
        key:"disconnect",
        icon: <CircleNotificationsOutlinedIcon />,
        event: disConnect

    }


]