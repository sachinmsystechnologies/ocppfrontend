
import {
  Stack,
  Container,
  Typography,
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from "react-router-dom";

// mock
import CHARGINGPOINTLIST from '../../_mock/chargingPoints';
import TableList from '../../Elements/TableList';
import { styled } from '@mui/material/styles';



// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'id', label: 'Charge Pont ID', flex: 3 },
  { id: 'heartbeat', label: 'Last Heartbeat', flex: 3 },
  { id: 'health', label: 'Health'},
  { id: 'action', label: 'Action' }

];


// ----------------------------------------------------------------------

const SpanElement = styled('span')(({ theme }) => ({
  padding: 10,
  borderRadius: Number(theme.shape.borderRadius) * 2.5
}));

export default function AdminPanelPage() {
  const navigate = useNavigate();

 const navigateToChargePointStausScreen = ( )=> navigate("/ocpp/charge-point-status");;
 const actionICon = () => <ChevronRightIcon onClick={navigateToChargePointStausScreen} />
//  const actionHealth = (health) => <SpanElement  style={{ background: (health == 'GOOD') ? "#66b266" : "red" }} >{health}</SpanElement>

 let Data = [...CHARGINGPOINTLIST].map((obj)=>{
    obj.action = actionICon();
    let element = {...obj}
    // console.log(actionHealth(element.health),obj.id)
    // obj.health = actionHealth(element.health);
    return obj;
 })
 console.log(Data)

  return (
    <>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
          <Typography variant="h5" gutterBottom>
            Charging Point
          </Typography>
        </Stack>
        <TableList Header={TABLE_HEAD} Data={Data} />

      </Container>

    </>
  );
}
