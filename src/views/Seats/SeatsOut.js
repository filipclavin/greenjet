import { useContext } from 'react'
import { useNavigate } from 'react-router'

import { Context } from '../../Context'

import { StyledMain, Wrapper } from './style'
import Header from '../../components/Header'
import NextButton from '../../components/NextButton'
import ProgressBar from '../../components/ProgressBar'
import SeatsRender from '../../components/SeatsRender'

const SeatsOut = () => {

    const { seatsOut, setSeatsOut, passengers, random } = useContext(Context)

    const navigate = useNavigate()

    return (
        <Wrapper>
            {!passengers[0] && navigate('/')}
            <Header linkTo='/profile' title='Välj sittplats dit' />
            <StyledMain>
                <ProgressBar step={6} white />
                <div className="seat-summary-wrapper">
                    {
                        passengers.map(passenger => {
                            return (
                                <div className='seat-summary' key={passenger.firstName + ' ' + passenger.lastName}>
                                    <h3>{passenger.firstName}<br />{passenger.lastName}</h3>
                                    <h4>Rad</h4>
                                    <p>{seatsOut[passengers.indexOf(passenger)] && seatsOut.filter(seat => seat.firstName === passenger.firstName && seat.lastName === passenger.lastName)[0].rowNum}</p>
                                    <h4>Sittplats</h4>
                                    <p>{seatsOut[passengers.indexOf(passenger)] && seatsOut.filter(seat => seat.firstName === passenger.firstName && seat.lastName === passenger.lastName)[0].seatLetter}</p>
                                </div>
                            )
                        })
                    }
                </div>
                {/* Unable to get real seats due to time constraints */}
                <SeatsRender seats={seatsOut} setSeats={setSeatsOut} random={random} />
                {
                    seatsOut.length >= passengers.length ?
                        <NextButton onClick={() => navigate('/seats-back')}>Nästa</NextButton>
                        :
                        <NextButton disabled>{seatsOut.length + 1} / {passengers.length}</NextButton>
                }
            </StyledMain>
        </Wrapper >
    )
}

export default SeatsOut
