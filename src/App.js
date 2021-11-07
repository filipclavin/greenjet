import { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { Context } from './Context';

import FromTo from "./views/FromTo/FromTo";

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

  const [inputTrip, setInputTrip] = useState({
    dept: '',
    dest: ''
  })
  const [trip, setTrip] = useState({
    dept: '',
    dest: ''
  })
  const [passengerNum, setPassengerNum] = useState('1')
  const [step, setStep] = useState(1)
  const [dateRange, setDateRange] = useState();


  const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = process.env

  const [accessToken, setAccessToken] = useState('ljkdmG2VWDybf0yqp1Juzv5cik9L')

  const getAccessToken = () => {
    fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
      body: `grant_type=client_credentials&client_id=${REACT_APP_CLIENT_ID}&client_secret=${REACT_APP_CLIENT_SECRET}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST"
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.access_token);
        setAccessToken(data.access_token)
      })
  }

  useEffect(() => {
    console.log('clientID: ' + REACT_APP_CLIENT_ID, '\nclientSecret: ' + REACT_APP_CLIENT_SECRET)
    /* getAccessToken() */
  }, [REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET])

  return (
    <>
      <GlobalStyle />

      <Context.Provider value={{
        inputTrip,
        setInputTrip,
        trip,
        setTrip,
        passengerNum,
        setPassengerNum,
        step,
        setStep,
        dateRange,
        setDateRange
      }}>
        <FromTo accessToken={accessToken} />
      </Context.Provider>
    </>
  )
}

export default App;
