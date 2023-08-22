import * as S from './styles'

import logo from '@/assets/logo.svg'

export function Header() {
  return (
    <S.Container>
      <img src={logo} alt="" />
    </S.Container>
  )
}
