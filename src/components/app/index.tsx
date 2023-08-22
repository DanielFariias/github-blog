import { Router } from '@/pages/router'
import { GlobalStyle } from '@/styles/global-styles'
import { defaultTheme } from '@/styles/themes/default'
import { ThemeProvider } from 'styled-components'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Router />
    </ThemeProvider>
  )
}
