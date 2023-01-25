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
        backgroundImage: `url(${pic})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '94vh',
      }}
    >
      <h1>Welcome</h1>
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
          onClick={() => navigate('dashboard')}
          variant="contained"
        >
          continue as guest
        </Button>
      </Box>
    </Box>
  )
}
