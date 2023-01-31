import * as React from 'react'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault()
  console.info('You clicked a breadcrumb.')
}

export function BreadCrumbNav() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div style={{ marginTop: '5rem', marginLeft: '1rem' }} role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          color="inherit"
          href="/"
          onClick={() => navigate('/')}
        >
          home
        </Link>
        <Link underline="hover" color="inherit" href={location.pathname}>
          {location.pathname.slice(1)}
        </Link>
      </Breadcrumbs>
    </div>
  )
}
