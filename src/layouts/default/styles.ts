import { styled } from 'styled-components'

export const Container = styled.div`
  > main {
    width: 100%;
    max-width: 54rem;
    margin: 0 auto;

    @media (max-width: 56rem) {
      padding: 0 2rem;
    }
  }
`
