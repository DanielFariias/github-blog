import { styled } from 'styled-components'

export const Container = styled.div`
  margin-bottom: 6rem;
`

export const CardList = styled.ul`
  margin-top: 3rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 56rem) {
    grid-template-columns: 1fr;
  }
`
