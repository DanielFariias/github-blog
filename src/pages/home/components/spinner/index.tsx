import { SpinnerContainer } from './styles'

interface SpinnerProps {
  spacingTop?: boolean
}

export function Spinner({ spacingTop }: SpinnerProps = {}) {
  return (
    <SpinnerContainer className={spacingTop ? 'spacing-top' : ''}>
      <div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </SpinnerContainer>
  )
}
