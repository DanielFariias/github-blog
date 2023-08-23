import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  ChatText,
  GithubLogo,
} from 'phosphor-react'
import * as S from './styles'
import { ExternalLink } from '@/components/external-link'
import { useNavigate } from 'react-router-dom'

interface IHeaderPost {
  title: string
  username: string
  commentsAmount: number
  createdAt: string
  postUrl: string
}

export function HeaderPost({
  title,
  username,
  commentsAmount,
  createdAt,
  postUrl,
}: IHeaderPost) {
  const navigate = useNavigate()

  function handleGoBack() {
    navigate(-1)
  }

  // if (isLoading) {
  //   return (
  //     <S.Container>
  //       <Spinner />
  //     </S.Container>
  //   )
  // }

  return (
    <S.Container>
      <header>
        <ExternalLink as="button" onClick={handleGoBack}>
          <CaretLeft weight="bold" /> Voltar
        </ExternalLink>

        <ExternalLink href={postUrl} target="_blank">
          Ver no Github <ArrowSquareOut weight="bold" />
        </ExternalLink>
      </header>

      <h3>{title}</h3>

      <ul>
        <li>
          <GithubLogo weight="fill" size={18} />
          {username}
        </li>

        <li>
          <Calendar weight="fill" size={18} /> {createdAt}
        </li>

        <li>
          <ChatText weight="fill" size={18} />
          {commentsAmount}
          {commentsAmount === 1 ? ' comentário' : ' comentários'}
        </li>
      </ul>
    </S.Container>
  )
}
