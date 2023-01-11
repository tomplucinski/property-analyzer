import { useEffect } from 'react'
import Button from '@mui/material/Button'
import axios from 'axios'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'
import pic from '../images/landing.jpg'

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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <img
        src={pic}
        alt="landing"
        style={{ position: 'absolute', height: '100vh' }}
      />
      <h1>Property Analyzer</h1>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Button
          sx={{ marginBottom: '10px' }}
          onClick={() => navigate('analyze')}
          variant="contained"
        >
          log in
        </Button>
        <Button
          sx={{ marginBottom: '10px' }}
          onClick={() => navigate('analyze')}
          variant="contained"
        >
          sign Up
        </Button>
        <Button
          sx={{ marginBottom: '10px' }}
          onClick={() => navigate('analyze')}
          variant="contained"
        >
          continue as guest
        </Button>
      </Box>
    </Box>
  )
}
