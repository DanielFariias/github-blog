import * as S from './styles'

interface ISearchFormProps {
  amountPublications: number
}

export function SearchForm({ amountPublications }: ISearchFormProps) {
  return (
    <S.Container>
      <header>
        <h3>Publicações</h3>

        <span>
          {amountPublications}
          {amountPublications === 1 ? ` Publicação` : ` Publicações`}
        </span>
      </header>

      <form>
        <input type="text" placeholder="Pesquisar conteúdo" />
      </form>
    </S.Container>
  )
}
