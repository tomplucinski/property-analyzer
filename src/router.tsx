import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  Form,
  TopAppBar,
  BottomNav,
  Landing,
  Saved,
  Account,
} from './components'
import { ThemeProvider } from '@mui/material'
import { theme } from './styles/Theme'

export function Router() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <TopAppBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/" element={<Form />} />
          <Route path="saved" element={<Saved />} />
          <Route path="account" element={<Account />} />
        </Routes>
        <BottomNav />
      </BrowserRouter>
    </ThemeProvider>
  )
}
