import {
  ArrowSquareOut,
  Buildings,
  GithubLogo,
  UsersThree,
} from 'phosphor-react'
import * as S from './styles'
import { ExternalLink } from '@/components/external-link'

export function HeaderCard() {
  return (
    <S.Container>
      <img src="https://github.com/DanielFariias.png" alt="" />

      <S.AboutUser>
        <header>
          <strong>Daniel Farias</strong>
          <ExternalLink href="#">
            Github
            <ArrowSquareOut weight="bold" />
          </ExternalLink>
        </header>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <ul>
          <li>
            <GithubLogo weight="fill" size={18} />
            cameronwll
          </li>

          <li>
            <Buildings weight="fill" size={18} /> cameronwll
          </li>

          <li>
            <UsersThree weight="fill" size={18} /> cameronwll
          </li>
        </ul>
      </S.AboutUser>
    </S.Container>
  )
}
