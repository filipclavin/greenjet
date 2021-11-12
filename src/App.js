import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { Context } from './Context';

import FromTo from "./views/FromTo/FromTo";
import DatePicker from "./views/DatePicker/DatePicker"
import FlightOffers from './views/FlightOffers/FlightOffers';
import FlightDetails from './views/FlightDetails/FlightDetails';
import TravelProfile from './views/TravelProfile/TravelProfile';
import SeatsOut from './views/Seats/SeatsOut';
import Compensate from './views/CarbonOffsetting/CarbonOffsetting';
import SeatsBack from './views/Seats/SeatsBack';

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

  a {
    text-decoration: none;

    :hover {
      cursor: pointer;
    }
  }

  .back-link {
    position: relative;
    right: 25px;
    width: 0;
    color: #FFFFFF80;
  }

  `

const App = () => {

  const [inputTrip, setInputTrip] = useState({
    dept: '',
    dest: ''
  })
  const [trip, setTrip] = useState({
    dept: {
      name: '',
      city: '',
      iata: ''
    },
    dest: {
      name: '',
      city: '',
      iata: ''
    }
  })
  const [passengerNum, setPassengerNum] = useState(1)
  const [dateRange, setDateRange] = useState()
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [flightDetails, setFlightDetails] = useState()
  const [passengers, setPassengers] = useState([])
  const [seatsOut, setSeatsOut] = useState([])
  const [seatsBack, setSeatsBack] = useState([])
  const [random, setRandom] = useState()
  const [compensationMultiplier, setCompensationMultiplier] = useState(0.5)
  const [accessToken, setAccessToken] = useState()

  const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = process.env

  useEffect(() => {
    setRandom([Math.random() * 2, Math.random() * 2, Math.random() * 2, Math.random() * 2, Math.random() * 2, Math.random() * 2, Math.random() * 2, Math.random() * 2, Math.random() * 2, Math.random() * 2])
  }, []);

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

  function formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }

  useEffect(() => {
    console.log('clientID: ' + REACT_APP_CLIENT_ID, '\nclientSecret: ' + REACT_APP_CLIENT_SECRET)
    getAccessToken()
  }, [REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET])

  useEffect(() => {
    if (dateRange) {
      setStartDate(formatDate(dateRange[0]))
      setEndDate(formatDate(dateRange[1]));
    }
  }, [dateRange])

  useEffect(() => {
    console.log(passengers);
  }, [passengers])

  return (
    <>
      <GlobalStyle />

      <Context.Provider value={{
        inputTrip, setInputTrip,
        trip, setTrip,
        passengerNum, setPassengerNum,
        dateRange, setDateRange,
        startDate,
        endDate,
        flightDetails, setFlightDetails,
        passengers, setPassengers,
        seatsOut, setSeatsOut,
        seatsBack, setSeatsBack,
        random,
        compensationMultiplier, setCompensationMultiplier,
        accessToken
      }}>
        <Router>
          <Routes>
            <Route exact path='/' element={<FromTo />} />
            <Route path='/pickdate' element={<DatePicker />} />
            <Route path='/offers' element={<FlightOffers />} />
            <Route path='/details' element={<FlightDetails />} />
            <Route path='/profile' element={<TravelProfile />} />
            <Route path='/seats-out' element={<SeatsOut />} />
            <Route path='/seats-back' element={<SeatsBack />} />
            <Route path='/carbon-offsetting' element={<Compensate />} />
          </Routes>
        </Router>
      </Context.Provider>
    </>
  )
}

export default App;
