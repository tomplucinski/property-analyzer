import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  Form,
  TopAppBar,
  BottomNav,
  Landing,
  SavedHomesList,
  Account,
} from './components'
import { ThemeProvider } from '@mui/material'
import { theme } from './styles/Theme'
import { BreadCrumbNav } from './components/BreadCrumbNav'

export function Router() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <TopAppBar />
        <BreadCrumbNav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="analyze" element={<Form />} />
          <Route path="saved" element={<SavedHomesList />} />
          <Route path="account" element={<Account />} />
        </Routes>
        <BottomNav />
      </BrowserRouter>
    </ThemeProvider>
  )
}
