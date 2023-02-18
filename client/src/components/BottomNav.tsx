import { useRef, useState } from 'react'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import FavoriteIcon from '@mui/icons-material/Favorite'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import TroubleshootIcon from '@mui/icons-material/Troubleshoot'
import Paper from '@mui/material/Paper'
import { Link } from 'react-router-dom'

export function BottomNav() {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
        >
          <BottomNavigationAction
            label="Analyze"
            icon={
              <Link to="/" style={{ color: 'inherit' }}>
                <TroubleshootIcon />
              </Link>
            }
          />
          <BottomNavigationAction
            label="Saved"
            icon={
              <Link to="saved" style={{ color: 'inherit' }}>
                <FavoriteIcon />
              </Link>
            }
          />
          <BottomNavigationAction
            label="Account"
            icon={
              <Link to="account" style={{ color: 'inherit' }}>
                <AccountCircleIcon />
              </Link>
            }
          />
        </BottomNavigation>
      </Paper>
    </Box>
  )
}
