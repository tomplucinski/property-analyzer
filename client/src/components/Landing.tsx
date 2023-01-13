import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'
import pic from '../images/landing.jpg'
import { LoginButton } from '.'

export function Landing() {
  const navigate = useNavigate()

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
        <LoginButton />
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
