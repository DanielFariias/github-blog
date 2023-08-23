import * as S from './styles'

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

        <span>{createdAt}</span>
      </S.PostHeader>

      <S.PostSummary>{description}</S.PostSummary>
    </S.Container>
  )
}
