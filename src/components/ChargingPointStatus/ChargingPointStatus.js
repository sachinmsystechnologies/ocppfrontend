import { React, useEffect, useState } from 'react';
// @mui
import {
  Stack,
  Container,
  Typography,
  Box
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import TableList from '../../Elements/TableList';
import { AdminPotalEndpoit } from '../../Elements/socket/socket';


//---------------------------------------------------------------------
const HEADER = [
  { id: 'id', label: 'EVSC ID', flex: 2 },
  { id: 'conectors', label: 'Connectors', flex: 2 },
  { id: 'status', label: 'Status' },
  { id: 'reading', label: 'Meter Reading' },
  { id: 'actions', label: 'Actions' }


];

const HEADERPAY = [
  { id: 'type', label: 'Type', flex: 1 },
  { id: 'payload', label: 'Payload', flex: 4 }
];

const DATA = [{
  id: '--',
  conectors: "Connector 1",
  status: '--',
  reading: '--',
  actions: "--"


}]

const stringify = (data) => <div><pre>{JSON.stringify(data, null, 2)}</pre></div>

// Style Element ----------------------------------------------------------------------


const RoundElement = styled('div')(({ theme }) => ({
  width: 20,
  height: 20,
  display: "inline-block",
  borderRadius: Number(theme.shape.borderRadius) * 3,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));
const DivElement = styled('div')(({ theme }) => ({
  marginBottom: 15,
  display: 'block'
}));

//Functional component ----------------------------------------------------------------------

export default function ChargePointPage() {
  const [Info, setInfo] = useState(DATA);
  const [heartBeatData, setheartBeatData] = useState([]);

  useEffect(() => {
    connection();
  }, [])

  const connection = async () => {
    if ("WebSocket" in window) {
      var ws = new WebSocket(AdminPotalEndpoit, ["ocpp2.0", "ocpp1.5"]);
      ws.onopen = function () {
        ws.send("Message to send");
      };

      ws.onmessage = function (event) {
        let eventData = JSON.parse(event.data);
        eventData.currentTime = new Date();
        let reading = eventData.meterValue;
        let data = heartBeatData;
        data = data.filter((obj) => obj.type != eventData.eventType);
        const obj = {
          type: eventData.eventType,
          payload: stringify(eventData)
        }
        data.push(obj)
        setheartBeatData((pre) => {
          let data = pre;
          data = data.filter((obj) => obj.type != eventData.eventType);
          const obj = {
            type: eventData.eventType,
            payload: stringify(eventData)
          }
          data.unshift(obj)
          return data;
        });



        if (eventData.eventType == 'AUTHORIZE') {
          ws.send("Message to send");
        }
        if (eventData.eventType != 'HEARTBEAT') {
          setInfo((data) => {
            if (eventData.eventType == 'AUTHORIZE') {
              try {
                reading = data[0].reading;
              } catch { }
            }

            return [{
              id: eventData.emvID ? eventData.emvID : '--',
              conectors: "Connector 1",
              status: eventData.connectorStatus == 'Plugged' ? "Plugged" : "Unplugged",
              reading: reading,
              actions: eventData.eventType
            }]
          })
        }
      };


      ws.onclose = async (e) => {
        setTimeout(() => {
          connection()
        }, 2000)
      }

    } else {
      alert("WebSocket NOT supported by your Browser!");
    }

  }

  return (
    <>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
          <Typography variant="h5" gutterBottom>
            ESVE_1
          </Typography>
        </Stack>
        <Box sx={{ flexGrow: 1 }}>
          <DivElement>
            <b> Last Heartbeat: </b> less than 5 sec ago &nbsp;&nbsp;
            <RoundElement
              style={{ background: "#66b266" }}>
            </RoundElement>
          </DivElement>
          {/* <DivElement><b>Mesage: </b> <span>RESTART</span></DivElement> */}
          <TableList Header={HEADER} Data={Info} />

          {heartBeatData.length > 0 && <>
            <DivElement><b>OCPP Message Monitor:</b></DivElement>
            <DivElement>
              <TableList Header={HEADERPAY} Data={heartBeatData} />
            </DivElement>
          </>}

        </Box>
      </Container>

    </>
  );
}
