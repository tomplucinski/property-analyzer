import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Form, Landing } from './components'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="analyze" element={<Form />} />
      </Routes>
    </BrowserRouter>
  )
}
