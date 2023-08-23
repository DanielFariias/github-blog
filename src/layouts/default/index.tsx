import { Header } from '@/components/header'
import { Outlet } from 'react-router-dom'
import * as S from './styles'

export function LayoutDefault() {
  return (
    <S.Container>
      <Header />

      <main>
        <Outlet />
      </main>
    </S.Container>
  )
}
