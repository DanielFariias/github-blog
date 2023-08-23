import { Card } from './components/card'
import { HeaderCard } from './components/header-card'
import { SearchForm } from './components/search-form'

import * as S from './styles'

export function Home() {
  return (
    <S.Container>
      <HeaderCard />
      <SearchForm />

      <S.CardList>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </S.CardList>
    </S.Container>
  )
}
