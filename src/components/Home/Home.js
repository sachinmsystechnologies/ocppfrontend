import React from 'react'
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button } from '@mui/material';


const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    justifyContent: 'center',
    alignItem:'center'
  },
}));

const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  // boxShadow: theme.customShadows.card,
  backgroundColor: theme.palette.background.default,
}));
export default ({ ...props }) => {


  return (
    <StyledRoot>
          <StyledSection>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Hi, 
              Welcome Back
            </Typography>
            <img src="/Assets/image/run.png" alt="run" />
          </StyledSection> 
    </StyledRoot>
  )
};