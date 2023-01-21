import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Form, Landing, Layout } from './components'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="analyze" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
