import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-top: 4.5rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-size: ${({ theme }) => theme.textSizes['title-title-s']};
      color: ${({ theme }) => theme.colors['base-subtitle']};
    }

    span {
      font-size: ${({ theme }) => theme.textSizes['text-text-s']};
      color: ${({ theme }) => theme.colors['base-span']};
    }
  }

  form {
    margin-top: 0.75rem;

    input {
      background-color: ${({ theme }) => theme.colors['base-input']};
      width: 100%;
      height: 50px;
      padding: 0.75rem 1rem;

      border: 1px solid ${({ theme }) => theme.colors['base-border']};
      border-radius: 6px;

      &::placeholder {
        color: ${({ theme }) => theme.colors['base-label']};
      }
    }
  }
`
