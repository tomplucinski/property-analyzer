import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Button from '@mui/material/Button'

export const LogoutButton = () => {
  const { logout } = useAuth0()

  return (
    <Button
      sx={{ marginBottom: '10px' }}
      onClick={() => logout({ returnTo: window.location.origin })}
      variant="contained"
    >
      log out
    </Button>
  )
}
