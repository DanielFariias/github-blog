import { ComponentProps } from 'react'

import * as S from './styles'

type ExternalLinkProps = ComponentProps<typeof S.Container> & {
  variant?: 'iconLeft'
  as?: string
}

export function ExternalLink({ ...rest }: ExternalLinkProps) {
  return <S.Container {...rest} />
}
