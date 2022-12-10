import { SyntheticEvent, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export function Form() {
  const [income, setIncome] = useState<number | null>(null)
  const [expenses, setExpenses] = useState<number | null>(null)
  const [noi, setNoi] = useState<number | null>(null)

  console.log(noi)

  useEffect(() => {
    if (income && expenses) {
      const netOperatingIncome = income - expenses
      setNoi(netOperatingIncome)
    }
  }, [income, expenses])

  const handleIncomeChange = (e: any) => {
    // regex numbers only
    setIncome(parseInt(e.target.value))
  }

  const handleExpensesChange = (e: any) => {
    // regex numbers only
    setExpenses(parseInt(e.target.value))
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
      <div>Total property income annually:</div>
      <TextField id="outlined-basic" label="Income" variant="outlined" onChange={handleIncomeChange}/>
      <div>Total operating expenses annually:</div>
      <TextField id="outlined-basic" label="Expenses" variant="outlined" onChange={handleExpensesChange}/>

      <Typography mt={2}>NOI: {noi}</Typography>
    </Box>
  )
}
