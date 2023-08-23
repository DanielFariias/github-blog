import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { LayoutDefault } from '@/layouts/default'

import { Home } from './home'
import { Post } from './post'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
