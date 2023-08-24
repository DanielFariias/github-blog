import { formatDistanceToNow } from 'date-fns'
import * as S from './styles'
import { ptBR } from 'date-fns/locale'

interface IPostCardProps {
  title: string
  description: string
  createdAt: string
}

export function PostCard({ title, description, createdAt }: IPostCardProps) {
  return (
    <S.Container>
      <S.PostHeader>
        <h3>{title}</h3>

        <small>
          {formatDistanceToNow(new Date(createdAt), {
            addSuffix: true,
            locale: ptBR,
          })}
        </small>
      </S.PostHeader>

      <S.PostSummary>{description}</S.PostSummary>
    </S.Container>
  )
}
