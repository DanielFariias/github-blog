import * as S from './styles'

export function SearchForm() {
  return (
    <S.Container>
      <header>
        <h3>Publicações</h3>

        <span>6 publicações</span>
      </header>

      <form>
        <input type="text" placeholder="Pesquisar conteúdo" />
      </form>
    </S.Container>
  )
}
