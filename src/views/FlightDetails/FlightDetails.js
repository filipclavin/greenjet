import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Context } from '../../Context'

import { Wrapper, StyledMain } from './style'
import Header from '../../components/StyledHeader'
import ProgressBar from '../../components/ProgressBar'
import NextButton from '../../components/NextButton'

import { ReactComponent as AirplaneIcon } from '../../resources/airplane-icon.svg'
import { ReactComponent as Circle } from '../../resources/itinerary-circle.svg'
import { ReactComponent as BrandedFares } from '../../resources/branded-fares.svg'

import filterAirports from '../../utils/filterAirports'

const airports = require('../../airports.json')
const sweAirports = require('../../airports-se.json')

const FlightDetails = () => {

    const { trip, flightDetails, startDate, endDate } = useContext(Context)

    const formatDate = (date) => {
        const day = new Date(date).getDate()
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']
        const month = months[new Date(date).getMonth()]

        return `${day} ${month}`
    }

    const navigate = useNavigate()

    const getAirport = (iata) => {
        const airport = filterAirports(iata)[0]
        return `${sweAirports[airports.indexOf(airport)].city} - ${airport.name} (${iata})`
    }

    return (
        <Wrapper>
            {!flightDetails && navigate('/')}
            <Header linkTo='/offers' />
            <StyledMain>
                <ProgressBar step={4} />
                <section className='flight-details'>
                    <div className='out'>
                        {flightDetails && startDate &&
                            <>
                                <div className='left'>
                                    <h1>Utresa<span>{formatDate(startDate)}</span></h1>
                                    <div className='itinerary'>
                                        <div className='itinerary-left'>
                                            <Circle className='circle' style={{ marginLeft: '2px' }} />
                                            <div className="line" />
                                            <AirplaneIcon />
                                            <div className="line" />
                                            <Circle className='circle' style={{ marginLeft: '2px' }} />
                                        </div>
                                        <div className='itinerary-right'>
                                            <p>{flightDetails.depTimeOut} <span>{trip.dept.city} - {trip.dept.name} ({trip.dept.iata})</span></p>
                                            {flightDetails.stopsOut.map(item => {
                                                return <p key={item.iataCode}>{item.at} <span>{getAirport(item.iataCode)}</span></p>
                                            })}
                                            <p>{flightDetails.arrTimeOut} <span>{trip.dest.city} - {trip.dest.name} ({trip.dest.iata})</span></p>
                                        </div>
                                    </div>
                                </div>
                                {/* Due to API limitations, I had to do a mock-up of the branded fares */}
                                <BrandedFares className='branded-fares' />
                            </>
                        }
                    </div>
                    <div className='back'>
                        {flightDetails && endDate &&
                            <>
                                <div className="left">
                                    <h1>Returresa<span>{formatDate(endDate)}</span></h1>
                                    <div className='itinerary'>
                                        <div className='itinerary-left'>
                                            <Circle className='circle' style={{ marginLeft: '2px' }} />
                                            <div className="line" />
                                            <AirplaneIcon />
                                            <div className="line" />
                                            <Circle className='circle' style={{ marginLeft: '2px' }} />
                                        </div>
                                        <div className='itinerary-right'>
                                            <p>{flightDetails.depTimeBack} <span>{trip.dest.city} - {trip.dest.name} ({trip.dest.iata})</span></p>
                                            {flightDetails.stopsBack.map(item => {
                                                return <p key={item.iataCode}>{item.at} <span>{getAirport(item.iataCode)}</span></p>
                                            })}
                                            <p>{flightDetails.arrTimeBack} <span>{trip.dept.city} - {trip.dept.name} ({trip.dept.iata})</span></p>
                                        </div>
                                    </div>
                                </div>
                                <BrandedFares className='branded-fares' />
                            </>
                        }
                    </div>
                </section>
                <NextButton className='next-button' onClick={() => {
                    navigate('/profile')
                }}>Nästa</NextButton>
            </StyledMain>
        </Wrapper >
    )
}

export default FlightDetails
