import { useEffect, useMemo, useState } from 'react';
// @mui
import {
  Card,
  Stack,
  Container,
  Typography,
  Box,
  Grid
} from '@mui/material';
import CHARGEPOINTLIST from "./OperationList"
import { styled, alpha } from '@mui/material/styles';
import { UpdateTransationPayload, BootNotificationPayload, AuthPayload, StartTransationPayload, StopTransationPayload, MeterValuePayload } from "../../Elements/socket/resource";
import {
  updateTranction, Heartbeat,
  bootNotification, MeterValue
} from "../../Elements/socket/socket";
import TableList from '../../Elements/TableList';


// Style Component ----------------------------------------------------------------------

const StyledAccount = styled('div')(({ theme }) => ({
  display: 'block',
  alignItems: 'center',
  fontWeight: '600',
  marginTop: 16,
  marginLeft: 8,
  padding: 16,
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));
const DivElement = styled('div')(({ theme }) => ({
  marginBottom: 15,
  display: 'block'
}));
const HEADERPAY = [
  { id: 'type', label: 'Type', flex: 1 },
  { id: 'payload', label: 'Payload', flex: 4 }
];

const stringify = (data) => <div><pre>{JSON.stringify(data, null, 4)}</pre></div>


export default function ChargePointPage() {
  const eventstatus = {
    connect: "Connected",
    autherize: "Connected & Autherized",
    plugin: "Plugged in",
    pluggedout: "Plugged out",
    disconnected: "Not Connected"

  }
  const [status, setStatus] = useState(eventstatus.disconnected);
  const [transactionInterval, setTransactionInterval] = useState();
  const [heartbeatInterval, setHeartbeatInterval] = useState();
  const [payloadInfo, setpayloadInfo] = useState([])


  useEffect(() => {
    return () => {
      clearInterval(transactionInterval);
      clearInterval(heartbeatInterval)
    }
  }, [])
  const setPayloadData = (payload) => {
    payload = (payload) ? payload : [];
    const info = payload.map((obj) => {
      return {
        type: obj.key,
        payload: obj.payload
      };
    })

    setpayloadInfo(info);
  }
  const wrapStatus = async (data) => {
    setStatus(data.status);
    const isEventEmitted = await data.event();
    if (isEventEmitted && data.key == 'connect') {
      isEventEmitted.addEventListener("open", (event) => {
        bootNotification(isEventEmitted, BootNotificationPayload);
        MeterValue();
        const interval = setInterval(() => {
          Heartbeat();
        }, 5000)
        setHeartbeatInterval(interval);
        setPayloadData([
          { key: 'BOOT', payload: BootNotificationPayload },
          { key: 'METER VALUE', payload: MeterValuePayload }
        ]);


      });
    }
    if (isEventEmitted && data.key == 'autherize') {
      setPayloadData([{ key: data.label, payload: AuthPayload }]);
    }
    if (isEventEmitted && data.key == 'plugin') {
      let transactionData = JSON.parse(UpdateTransationPayload);
      const interval = setInterval(() => {
        transactionData.data.meterValue[0].sampledValue[0].value =
          transactionData.data.meterValue[0].sampledValue[0].value + 3;
        updateTranction(JSON.stringify(transactionData));
        setPayloadData([{ key: data.label, payload: JSON.stringify(transactionData) }]);
      }, 2000)
      setTransactionInterval(interval)
      setPayloadData([{ key: data.label, payload: StartTransationPayload }]);
    }
    if (isEventEmitted && data.key == 'unplugged') {
      setPayloadData([{ key: data.label, payload: StopTransationPayload }]);
      clearInterval(transactionInterval);
    }

  }
  const ControlElement = (data) => useMemo(() => {
    return <Card sx={{ boxShadow: 3, padding: 2, margin: 1 }}>
      <Grid container onClick={() => wrapStatus(data)}>
        <Grid item xs={9}>
          {data.label}
        </Grid>
        <Grid item xs={3}>
          {data.icon}
        </Grid>
      </Grid>
    </Card>
  })

  const ChargerStatus = () => useMemo(() => {
    return <Grid item xs={12}>
      <StyledAccount>Status : {status}</StyledAccount>
    </Grid>
  })


  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
        <Typography variant="h5" gutterBottom>
          Charging Point Visualisation
        </Typography>
      </Stack>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <img src="/Assets/image/ev.gif" width={"100%"} alt="run" />
          </Grid>
          <Grid xl={6} container style={{ height: '100%' }}  >
            {ChargerStatus()}
            {CHARGEPOINTLIST.map((obj, i) => {
              return <Grid item xs={4} key={i}>{ControlElement(obj)}</Grid>
            })}
          </Grid>
        </Grid>
        {payloadInfo.length > 0 && <>
          <DivElement>
            <TableList Header={HEADERPAY} Data={payloadInfo} />
          </DivElement>
        </>}

      </Box>

    </Container>
  );
}
