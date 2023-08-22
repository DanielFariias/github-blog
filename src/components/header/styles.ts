import { styled } from 'styled-components'

import coverBg from '@/assets/cover-bg.png'

export const Container = styled.header`
  width: 100%;
  height: 18.5rem;
  background: url(${coverBg}) no-repeat center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 5rem;
  }
`
