import * as z from 'zod'
import * as S from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

interface ISearchFormProps {
  amountPublications: number
  getPosts: (query?: string) => void
}

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormSchemaType = z.infer<typeof searchFormSchema>

export function SearchForm({ amountPublications, getPosts }: ISearchFormProps) {
  const { handleSubmit, register, reset } = useForm<SearchFormSchemaType>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: '',
    },
  })

  function handleSearchPosts(data: SearchFormSchemaType) {
    getPosts(data.query)
    reset()
  }

  return (
    <S.Container>
      <header>
        <h3>Publicações</h3>

        <span>
          {amountPublications}
          {amountPublications === 1 ? ` Publicação` : ` Publicações`}
        </span>
      </header>

      <form onSubmit={handleSubmit(handleSearchPosts)}>
        <input
          type="text"
          placeholder="Pesquisar conteúdo"
          {...register('query')}
        />
      </form>
    </S.Container>
  )
}
