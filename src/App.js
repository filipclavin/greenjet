import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import FromTo from "./views/FromTo";

const GlobalStyle = createGlobalStyle`
  ${reset}
  display: flex;
  flex-direction: column;
  

  html, html > *, body > * {
    height: 100%;
    font-size: 18px;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

const App = () => {

  return (
    <>
      <GlobalStyle />

      <FromTo />
    </>
  )
}

export default App;
