import { styled } from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors['base-post']};
  min-width: 26rem;
  padding: 2rem;

  border-radius: 10px;
`

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    max-width: 15rem;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
`

export const PostSummary = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`
