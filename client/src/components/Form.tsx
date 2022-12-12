import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export function Form() {
  const [income, setIncome] = useState<number>(0)
  const [expenses, setExpenses] = useState<number>(0)
  const [debtPayment, setDebtPayment] = useState<number>(0)
  const [capExPayment, setCapExPayment] = useState<number>(0)
  const [noi, setNoi] = useState<number>(0)
  const [cashFlow, setCashFlow] = useState<number>(0)
  const reg = new RegExp('^[0-9]+$')

  useEffect(() => {
    const netOperatingIncome = income - expenses
    setNoi(netOperatingIncome)
  }, [income, expenses])

  useEffect(() => {
    const cFlow = noi - debtPayment - capExPayment
    setCashFlow(cFlow)
  }, [noi, debtPayment, capExPayment])

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

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>Calculate Net Operating Income</div>
      <div>Monthly property income:</div>
      <TextField id="outlined-basic" label="Income" variant="outlined" onChange={handleIncomeChange}/>

      <div>Monthly operating expenses:</div>
      <TextField id="outlined-basic" label="Expenses" variant="outlined" onChange={handleExpensesChange}/>

      <Typography mt={2}>NOI: {noi}</Typography>

      <div>Calculate Cash Flow</div>
      <div>Monthly debt payments:</div>
      <TextField id="outlined-basic" label="Debt" variant="outlined" onChange={handleDebtChange}/>

      <div>Monthly reserve payment for CapEx:</div>
      <TextField id="outlined-basic" label="CapEx" variant="outlined" onChange={handleCapExChange}/>

      <Typography mt={2}>Monthly Cash Flow: {cashFlow}</Typography>

      <Button onClick={() => console.log('link')} variant="outlined">Add link</Button>
      <Button onClick={() => console.log('save')} variant="contained">Save analysis</Button>

    </Box>
  )
}
