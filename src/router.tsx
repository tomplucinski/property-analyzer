import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Form, Landing, Layout } from './components'
import { ThemeProvider } from '@mui/material'
import { theme } from './styles/Theme'

export function Router() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="analyze" element={<Form />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
