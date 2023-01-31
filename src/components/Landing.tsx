import Box from '@mui/material/Box'
import pic from '../images/landing.jpg'
import Typography from '@mui/material/Typography'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { useState } from 'react'
import { ButtonColors } from './types'
import Button from '@mui/material/Button'
import EastIcon from '@mui/icons-material/East'
import { useNavigate } from 'react-router-dom'

export function Landing() {
  const [address, setAddress] = useState(null)
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // backgroundImage: `url(${pic})`,
        // backgroundPosition: 'center',
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        // backgroundAttachment: 'fixed',
        // height: '100vh',
      }}
    >
      <Box sx={{ marginTop: '2rem' }}>
        <Typography
          mt={5}
          variant="h3"
          sx={{
            marginBottom: '1rem',
          }}
        >
          Search property to analyze
        </Typography>
        <GooglePlacesAutocomplete
          apiKey={process.env.REACT_APP_PLACES_API_KEY}
          selectProps={{
            address,
            onChange: (a: any) => setAddress(a.label),
          }}
        />
      </Box>

      {address && (
        <Button
          color={ButtonColors.PRIMARY}
          variant="contained"
          sx={{ mt: 3, ml: 1, margin: '3rem' }}
          onClick={() => navigate('analyze')}
        >
          Analyze {address}
          <EastIcon />
        </Button>
      )}
    </Box>
  )
}
