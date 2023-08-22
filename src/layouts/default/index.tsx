import { Header } from '@/components/header'
import { Outlet } from 'react-router-dom'

export function LayoutDefault() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
    </>
  )
}
