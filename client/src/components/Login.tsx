import { useAuth0 } from '@auth0/auth0-react'
import Button from '@mui/material/Button'

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <Button sx={{ color: 'inherit' }} onClick={() => loginWithRedirect()}>
      log in
    </Button>
  )
}
