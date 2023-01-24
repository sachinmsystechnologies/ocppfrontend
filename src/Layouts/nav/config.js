// component
// import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import EvStationOutlinedIcon from '@mui/icons-material/EvStationOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// ----------------------------------------------------------------------


const navConfig = [
  {
    title: 'Home',
    path: '/ocpp/home',
    icon: <HomeOutlinedIcon />,
  },
  {
    title: 'Admin Panel',
    path: '/ocpp/admin_panel',
    icon: <AdminPanelSettingsOutlinedIcon />
  },
  {
    title: 'Charge Point',
    path: '/ocpp/charge-point',
    icon: <EvStationOutlinedIcon />
  }
];

export default navConfig;
