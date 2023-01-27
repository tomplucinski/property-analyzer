import Box from '@mui/material/Box'
import pic from '../images/landing.jpg'
import Typography from '@mui/material/Typography'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { useState } from 'react'
import { Form } from './Form'

export function Landing() {
  const [address, setAddress] = useState(null)

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
      <Box sx={{ marginTop: '3rem' }}>
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

      {address && <Form />}
    </Box>
  )
}
