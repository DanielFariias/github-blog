import { useNavigate } from 'react-router-dom'
import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  ChatText,
  GithubLogo,
} from 'phosphor-react'

import { ExternalLink } from '@/components/external-link'
import { IPost } from '../..'

import { Spinner } from '@/pages/home/components/spinner'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import * as S from './styles'

interface IHeaderPost {
  post: IPost
  isLoading: boolean
}

export function HeaderPost({ post, isLoading }: IHeaderPost) {
  const navigate = useNavigate()

  function handleGoBack() {
    navigate('/')
  }

  if (isLoading) {
    return (
      <S.Container>
        <Spinner />
      </S.Container>
    )
  }

  return (
    <S.Container>
      <header>
        <ExternalLink as="button" onClick={handleGoBack}>
          <CaretLeft weight="bold" /> Voltar
        </ExternalLink>

        <ExternalLink href={post.html_url} target="_blank">
          Ver no Github <ArrowSquareOut weight="bold" />
        </ExternalLink>
      </header>

      <h3>{post.title}</h3>

      <ul>
        <li>
          <GithubLogo weight="fill" size={18} />
          {post.user?.login}
        </li>

        <li>
          <Calendar weight="fill" size={18} />
          {post.created_at &&
            formatDistanceToNow(new Date(post.created_at), {
              addSuffix: true,
              locale: ptBR,
            })}
        </li>

        <li>
          <ChatText weight="fill" size={18} />
          {post.comments}
          {post.comments === 1 ? ' comentário' : ' comentários'}
        </li>
      </ul>
    </S.Container>
  )
}
