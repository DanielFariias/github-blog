import {
  ArrowSquareOut,
  Buildings,
  GithubLogo,
  UsersThree,
} from 'phosphor-react'
import * as S from './styles'
import { ExternalLink } from '@/components/external-link'
import { useEffect, useState } from 'react'
import { Spinner } from '../spinner'
import postsService from '@/services/posts-service'

interface ProfileData {
  login: string
  bio: string
  avatar_url: string
  html_url: string
  name: string
  company?: string
  followers: number
}

export function HeaderCard() {
  const [user, SetUser] = useState<ProfileData>({} as ProfileData)
  const [isLoading, setIsLoading] = useState(true)

  async function fetchUserData() {
    try {
      const response = await postsService.getUser()

      SetUser(response)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  if (isLoading) {
    return (
      <S.Container>
        <Spinner />
      </S.Container>
    )
  }

  return (
    <S.Container>
      <img src={user.avatar_url} alt="" />

      <S.ProfileDetails>
        <header>
          <strong>{user.name}</strong>
          <ExternalLink href={user.html_url} target="_blank">
            Github
            <ArrowSquareOut weight="bold" />
          </ExternalLink>
        </header>

        <p>{user.bio}</p>

        <ul>
          <li>
            <GithubLogo weight="fill" size={18} />
            {user.login}
          </li>

          <li>
            <Buildings weight="fill" size={18} /> {user.company}
          </li>

          <li>
            <UsersThree weight="fill" size={18} />
            {user.followers}
            {user.followers === 1 ? ` Seguindor` : ` Seguindores`}
          </li>
        </ul>
      </S.ProfileDetails>
    </S.Container>
  )
}
