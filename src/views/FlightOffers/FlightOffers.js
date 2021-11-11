import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../Context'

import { StyledMain, Wrapper } from './style'
import Header from '../../components/StyledHeader'
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
            <Header linkTo='/pickdate' />
            <StyledMain>
                <ProgressBar step={3} />
                <PriceCalendar />
                <OfferList />
            </StyledMain>
        </Wrapper>
    )
}

export default FlightOffers
