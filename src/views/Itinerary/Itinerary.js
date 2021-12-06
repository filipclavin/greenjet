import { useContext, useState } from 'react'
import SeatsRender from '../../components/SeatsRender'

import { Context } from '../../Context'
import { StyledMain } from '../Receipt/style'
import { Wrapper } from './style'

import { ReactComponent as AirplaneIcon } from '../../resources/rising-airplane.svg'
import { Link, useNavigate } from 'react-router-dom'

const Itinerary = () => {
    const { seatsOut, seatsBack, random, trip, flightDetails } = useContext(Context)
    const navigate = useNavigate()

    const [showBack, setShowBack] = useState(false)

    return (
        <>
            {!(seatsOut && seatsBack && random && trip && flightDetails) ? navigate('/') : <Wrapper>
                <div className='summaries'>
                    <div className={`summary out ${!showBack ? 'selected' : ''}`} onClick={() => setShowBack(false)}>
                        <AirplaneIcon />
                        <h1>{trip.dept.iata}</h1>
                        <p className='city'>{trip.dept.city}</p>
                        <h2>{flightDetails.depTimeOut}</h2>
                        <p>Avgång</p>
                    </div>
                    <div className={`summary back ${showBack ? 'selected' : ''}`} onClick={() => setShowBack(true)}>
                        <AirplaneIcon />
                        <h1>{trip.dest.iata}</h1>
                        <p className='city'>{trip.dest.city}</p>
                        <h2>{flightDetails.depTimeBack}</h2>
                        <p>Avgång</p>
                    </div>
                </div>
                <StyledMain>
                    <SeatsRender seats={showBack ? seatsBack : seatsOut} random={random} />
                </StyledMain>
                <Link to='/receipt'>VISA KVITTO</Link>
            </Wrapper >
            }
        </>
    )
}

export default Itinerary
