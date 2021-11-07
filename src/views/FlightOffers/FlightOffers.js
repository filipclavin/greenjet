import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../../Context'

import { StyledHeader, StyledMain, Wrapper } from './style'
import ProgressBar from '../../components/ProgressBar'
import OfferList from '../../components/OfferList'
import PriceCalendar from '../../components/PriceCalendar'

const FlightOffers = () => {

    const { trip, dateRange } = useContext(Context)

    const navigate = useNavigate()

    useEffect(() => {
        if (!trip.dept.city || !trip.dest.city) navigate('/')
        else if (!dateRange) navigate('/pickdate')
    })

    return (
        <Wrapper>
            <StyledHeader>
                <Link className='back-link' to='/pickdate'>&lt;</Link>
                <h1>{trip.dept.city} - {trip.dest.city}</h1>
            </StyledHeader>
            <StyledMain>
                <ProgressBar step={3} />
                <PriceCalendar />
                <OfferList />
            </StyledMain>
        </Wrapper>
    )
}

export default FlightOffers
