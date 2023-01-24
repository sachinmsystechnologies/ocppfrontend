import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from '../../Layouts';
import HomeComponent from '../Home';
import AdminPanelComponent from '../AdminPanel'
import ChargePointComponent from '../ChargePoint'
import ChargingPointStatusComponent from '../ChargingPointStatus'




// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/ocpp',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/ocpp/home" />, index: true },
        { path: 'home', element: <HomeComponent /> },
        { path: 'admin_panel', element: <AdminPanelComponent /> },
        { path: 'charge-point', element: <ChargePointComponent /> },
        { path: 'charge-point-status', element: <ChargingPointStatusComponent /> }

      ],
    },
    {
      path: '*',
      element: <Navigate to="/ocpp/home" replace />,
    },
  ]);

  return routes;
}
