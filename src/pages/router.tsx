import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from './home'
import { LayoutDefault } from '@/layouts/default'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
