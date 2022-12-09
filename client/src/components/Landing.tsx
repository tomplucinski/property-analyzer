import React, { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

export function Landing() {
  const navigate = useNavigate()

  useEffect(() => {
    try {
      loadData()      
    } catch (error) {
      console.log('ERROR', error)
    }
  }, [])

  const loadData = async () => {
    const { data } = await axios.get('/api')
    console.log('DATA ', data)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <h1>Property Analyzer</h1>  
      <Stack spacing={2} direction="row">
        <Button onClick={() => navigate('form')} variant="contained">Contained</Button>
      </Stack>
    </Box>
  );
}
