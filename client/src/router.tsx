import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Form, Landing, Navbar } from './components'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/" element={<Navbar />} />
        <Route path="analyze" element={<Form />} />
      </Routes>
    </BrowserRouter>
  )
}
