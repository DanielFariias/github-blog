import ReactMarkdown from 'react-markdown'

import { ComponentCode } from '@/utils/marckdown-highlighter'

import * as S from './styles'

interface IPostContent {
  content: string
}

export function PostContent({ content }: IPostContent) {
  return (
    <S.Container>
      <ReactMarkdown components={{ code: ComponentCode }}>
        {content}
      </ReactMarkdown>
    </S.Container>
  )
}
