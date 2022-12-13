import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export function Form() {
  const [income, setIncome] = useState<number>(0)
  const [expenses, setExpenses] = useState<number>(0)
  const [debtPayment, setDebtPayment] = useState<number>(0)
  const [capExPayment, setCapExPayment] = useState<number>(0)
  const [noi, setNoi] = useState<number>(0)
  const [cashFlow, setCashFlow] = useState<number>(0)
  const [homeValue, setHomeValue] = useState<number>(0)
  const [capRate, setCapRate] = useState<number>(0)
  const reg = new RegExp('^[0-9]+$')

  useEffect(() => {
    const netOperatingIncome = income - expenses
    setNoi(netOperatingIncome)
  }, [income, expenses])

  useEffect(() => {
    const cFlow = noi - debtPayment - capExPayment
    setCashFlow(cFlow)
  }, [noi, debtPayment, capExPayment])

  useEffect(() => {
    if (homeValue && noi) {
      const cRate = noi / homeValue
      setCapRate(cRate)
    }
  }, [noi, homeValue])

  const handleIncomeChange = (e: any) => {
    if (reg.test(e.target.value)) {
      setIncome(parseInt(e.target.value))
    } else {
      setIncome(0)
    }
  }

  const handleExpensesChange = (e: any) => {
    if (reg.test(e.target.value)) {
      setExpenses(parseInt(e.target.value))
    } else {
      setExpenses(0)
    }
  }

  const handleDebtChange = (e: any) => {
    if (reg.test(e.target.value)) {
      setDebtPayment(parseInt(e.target.value))
    } else {
      setDebtPayment(0)
    }
  }

  const handleCapExChange = (e: any) => {
    if (reg.test(e.target.value)) {
      setCapExPayment(parseInt(e.target.value))
    } else {
      setCapExPayment(0)
    }
  }

  const handleHomeValueChange = (e: any) => {
    if (reg.test(e.target.value)) {
      setHomeValue(parseInt(e.target.value))
    } else {
      setHomeValue(0)
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

      <Button onClick={() => console.log('link')} variant="outlined">
        Add link
      </Button>
      <Button onClick={() => console.log('save')} variant="contained">
        Save analysis
      </Button>
    </Box>
  )
}
