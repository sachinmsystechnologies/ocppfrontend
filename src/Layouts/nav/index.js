// @mui
import { styled, alpha } from '@mui/material/styles';
import { Box, Link, Button, Drawer, Typography, Avatar, Stack } from '@mui/material';

import NavSection from '../.././Elements/nav-section';
import navConfig from './config';
import Scrollbar from '../.././Elements/scrollbar';
// import UserImage from "/image/profile.png"


// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const StyledAccount = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

// ----------------------------------------------------------------------

// Nav.propTypes = {
//   openNav: PropTypes.bool,
//   onCloseNav: PropTypes.func,
// };

export default function Nav() {
  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }}
    >
      <Box sx={{ px: 2.5, py: 1, display: 'inline-flex' }}>
        <Avatar src={'/Assets/image/logo.png'} sx={{ width: 100, height: 100 }} alt="photoURL" />

      </Box>

      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none">
          <StyledAccount>
            <Avatar src={'/Assets/image/profile.png'} alt="photoURL" />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'rgba(0, 0, 0, 0.87)',fontWeight:600,wordSpacing:2 }}>
                Mano
              </Typography>

              {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
               Software engineer
              </Typography> */}
            </Box>
          </StyledAccount>
        </Link>
      </Box>

      <NavSection data={navConfig} />

      <Box sx={{ flexGrow: 1 }} />

    </Scrollbar>

  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >

        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      
    </Box>
  );
}
