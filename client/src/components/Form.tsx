import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Autocomplete from '@mui/material/Autocomplete'
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
  const [address, setAddress] = useState(null)

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

  return (
    <Box component="form" sx={{ m: 1, width: '25ch' }}>
      <Typography>Monthly Net Operating Income</Typography>
      <TextField
        id="outlined-basic"
        label="Property income"
        variant="outlined"
        onChange={handleIncomeChange}
      />
      <TextField
        id="outlined-basic"
        label="Property expenses"
        variant="outlined"
        onChange={handleExpensesChange}
      />
      <Typography mt={2}>NOI: {noi}</Typography>

      <Typography>Monthly Cash Flow</Typography>
      <TextField
        id="outlined-basic"
        label="Debt payments"
        variant="outlined"
        onChange={handleDebtChange}
      />
      <TextField
        id="outlined-basic"
        label="CapEx payments"
        variant="outlined"
        onChange={handleCapExChange}
      />

      <Typography mt={2}>Monthly Cash Flow: {cashFlow}</Typography>

      <TextField
        id="outlined-basic"
        label="Home market value"
        variant="outlined"
        onChange={handleHomeValueChange}
      />

      <Typography mt={2}>Cap Rate: {capRate}</Typography>

      <Typography mt={2}>Address</Typography>
      <GooglePlacesAutocomplete
        apiKey={process.env.REACT_APP_PLACES_API_KEY}
        selectProps={{
          address,
          onChange: setAddress,
        }}
      />

      <Button onClick={() => console.log('link')} variant="outlined">
        Add link
      </Button>
      <Button onClick={() => console.log('save')} variant="contained">
        Save analysis
      </Button>
    </Box>
  )
}
