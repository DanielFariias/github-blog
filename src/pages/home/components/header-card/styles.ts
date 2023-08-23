import { styled } from 'styled-components'

export const Container = styled.div`
  margin-top: -5rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors['base-profile']};
  padding: 2rem;

  display: flex;
  gap: 2rem;

  img {
    width: 9.25rem;
    border-radius: 8px;
  }
`

export const AboutUser = styled.div`
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-size: ${({ theme }) => theme.textSizes['title-title-l']};
      color: ${({ theme }) => theme.colors['base-title']};
    }
  }

  p {
    margin-top: 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  ul {
    margin-top: 2.5rem;
    display: flex;
    gap: 1.5rem;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      line-height: 0;
      font-size: ${({ theme }) => theme.textSizes['text-text-m']};
      color: ${({ theme }) => theme.colors['base-subtitle']};

      svg {
        color: ${({ theme }) => theme.colors['base-label']};
      }
    }
  }
`
