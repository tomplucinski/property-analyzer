import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

export function Form() {
  const [state, setState] = useState({
    income: 0,
    expenses: 0,
    debtPayment: 0,
    capExPayment: 0,
    noi: 0,
    cashFlow: 0,
    homeValue: 0,
    capRate: 0,
  })
  const {
    income,
    expenses,
    debtPayment,
    capExPayment,
    noi,
    cashFlow,
    homeValue,
    capRate,
  } = state

  const reg = new RegExp('^[0-9]+$')

  useEffect(() => {
    const noi = income - expenses
    setState({
      ...state,
      noi,
    })
  }, [income, expenses])

  useEffect(() => {
    const cashFlow = noi - debtPayment - capExPayment
    setState({
      ...state,
      cashFlow,
    })
  }, [noi, debtPayment, capExPayment])

  useEffect(() => {
    if (homeValue && noi) {
      const capRate = noi / homeValue
      setState({
        ...state,
        capRate,
      })
    }
  }, [noi, homeValue])

  const handleIncomeChange = (e: any) => {
    if (reg.test(e.target.value)) {
      setState({
        ...state,
        income: parseInt(e.target.value),
      })
    } else {
      setState({
        ...state,
        income: 0,
      })
    }
  }

  const handleExpensesChange = (e: any) => {
    if (reg.test(e.target.value)) {
      setState({
        ...state,
        expenses: parseInt(e.target.value),
      })
    } else {
      setState({
        ...state,
        expenses: 0,
      })
    }
  }

  const handleDebtChange = (e: any) => {
    if (reg.test(e.target.value)) {
      setState({
        ...state,
        debtPayment: parseInt(e.target.value),
      })
    } else {
      setState({
        ...state,
        debtPayment: 0,
      })
    }
  }

  const handleCapExChange = (e: any) => {
    if (reg.test(e.target.value)) {
      setState({
        ...state,
        capExPayment: parseInt(e.target.value),
      })
    } else {
      setState({
        ...state,
        capExPayment: 0,
      })
    }
  }

  const handleHomeValueChange = (e: any) => {
    if (reg.test(e.target.value)) {
      setState({
        ...state,
        homeValue: parseInt(e.target.value),
      })
    } else {
      setState({
        ...state,
        homeValue: 0,
      })
    }
  }

  const handleSave = () => {
    console.log(state)
  }

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '1.5rem',
      }}
    >
      <TextField
        sx={{ marginTop: '1rem' }}
        id="outlined-basic"
        label="Property income"
        variant="outlined"
        onChange={handleIncomeChange}
      />
      <TextField
        sx={{ marginTop: '1rem' }}
        id="outlined-basic"
        label="Property expenses"
        variant="outlined"
        onChange={handleExpensesChange}
      />
      <Typography sx={{ marginTop: '1rem' }}>
        Net Operating Income: {noi}
      </Typography>

      <TextField
        sx={{ marginTop: '1rem' }}
        id="outlined-basic"
        label="Debt payments"
        variant="outlined"
        onChange={handleDebtChange}
      />
      <TextField
        sx={{ marginTop: '1rem' }}
        id="outlined-basic"
        label="CapEx payments"
        variant="outlined"
        onChange={handleCapExChange}
      />
      <Typography sx={{ marginTop: '1rem' }}>
        Monthly Cash Flow: {cashFlow}
      </Typography>

      <TextField
        sx={{ marginTop: '1rem' }}
        id="outlined-basic"
        label="Home market value"
        variant="outlined"
        onChange={handleHomeValueChange}
      />

      <Typography sx={{ marginTop: '1rem' }}>Cap Rate: {capRate}</Typography>

      <Button
        sx={{ marginTop: '1rem' }}
        onClick={handleSave}
        variant="contained"
      >
        Save analysis
      </Button>
    </Box>
  )
}
