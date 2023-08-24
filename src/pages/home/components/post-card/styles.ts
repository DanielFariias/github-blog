import { styled } from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors['base-post']};
  max-width: 26rem;
  padding: 2rem;
  cursor: pointer;

  border: 2px solid ${({ theme }) => theme.colors['base-background']};
  border-radius: 10px;
  transition: border 0.2s ease-in-out;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors['base-label']};
  }

  @media (max-width: 56rem) {
    max-width: 100%;
  }
`

export const PostHeader = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  h3 {
    max-width: 15rem;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  span {
    font-size: ${({ theme }) => theme.textSizes['text-text-s']};
  }
`

export const PostSummary = styled.p`
  margin-top: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`
