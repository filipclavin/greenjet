import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import FromTo from "./views/FromTo";


const GlobalStyle = createGlobalStyle`
  ${reset}
  display: flex;
  flex-direction: column;
  
  html * {
    font-family: 'Roboto', sans-serif;
  }

  html, html > *, body > * {
    height: 100%;
    font-size: 18px;
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
