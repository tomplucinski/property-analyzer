import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Form, TopAppBar, BottomNav, Landing } from './components'
import { ThemeProvider } from '@mui/material'
import { theme } from './styles/Theme'

export function Router() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <TopAppBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="analyze" element={<Form />} />
        </Routes>
        <BottomNav />
      </BrowserRouter>
    </ThemeProvider>
  )
}
