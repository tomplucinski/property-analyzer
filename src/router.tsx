import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard, Form, Landing, Layout, Navbar } from './components'
import { ThemeProvider } from '@mui/material'
import { theme } from './styles/Theme'

export function Router() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Dashboard />} /> */}
          {/* <Route index element={<Landing />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="analyze" element={<Form />} /> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
