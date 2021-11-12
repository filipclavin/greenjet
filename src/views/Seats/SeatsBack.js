import { useContext } from 'react'
import { useNavigate } from 'react-router'

import { Context } from '../../Context'

import { StyledMain, Wrapper } from './style'
import Header from '../../components/Header'
import NextButton from '../../components/NextButton'
import ProgressBar from '../../components/ProgressBar'
import SeatsRender from '../../components/SeatsRender'

const SeatsBack = () => {

    const { seatsBack, setSeatsBack, passengers, random } = useContext(Context)

    const navigate = useNavigate()

    return (
        <Wrapper>
            {!passengers[0] && navigate('/')}
            <Header linkTo='/seats-out' title='Välj sittplats hem' />
            <StyledMain>
                <ProgressBar step={7} white />
                <div className="seat-summary-wrapper">
                    {
                        passengers.map(passenger => {
                            return (
                                <div className='seat-summary' key={passenger.firstName + ' ' + passenger.lastName}>
                                    <h3>{passenger.firstName}<br />{passenger.lastName}</h3>
                                    <h4>Rad</h4>
                                    <p>{seatsBack[passengers.indexOf(passenger)] && seatsBack.filter(seat => seat.firstName === passenger.firstName && seat.lastName === passenger.lastName)[0].rowNum}</p>
                                    <h4>Sittplats</h4>
                                    <p>{seatsBack[passengers.indexOf(passenger)] && seatsBack.filter(seat => seat.firstName === passenger.firstName && seat.lastName === passenger.lastName)[0].seatLetter}</p>
                                </div>
                            )
                        })
                    }
                </div>
                {/* Unable to get real seats due to time constraints */}
                <SeatsRender seats={seatsBack} setSeats={setSeatsBack} random={random.map(item => item + 1)} />
                {
                    seatsBack.length >= passengers.length ?
                        <NextButton onClick={() => navigate('/carbon-offsetting')}>Nästa</NextButton>
                        :
                        <NextButton disabled>{seatsBack.length + 1} / {passengers.length}</NextButton>
                }
            </StyledMain>
        </Wrapper >
    )
}

export default SeatsBack
