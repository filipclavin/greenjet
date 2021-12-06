import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../Context';

import { ReactComponent as Logo } from '../../resources/logo.svg'
import { Wrapper, First, Second, Info } from './style.js'
import NextButton from '../../components/NextButton';

import AutoComplete from '../../components/AutoComplete';

const FromTo = () => {
    const {
        inputTrip,
        setInputTrip,
        trip,
        setTrip,
        passengerNum,
        setPassengerNum,
    } = useContext(Context)

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        navigate('/pickdate')
    }

    return (
        <Wrapper>
            <First passengerNum={passengerNum}>
                <Logo />
                <form onSubmit={handleSubmit}>
                    <AutoComplete name='dept'
                        inputTrip={inputTrip}
                        setInputTrip={setInputTrip}
                        trip={trip}
                        setTrip={setTrip} />
                    <AutoComplete name='dest'
                        inputTrip={inputTrip}
                        setInputTrip={setInputTrip}
                        trip={trip}
                        setTrip={setTrip} />
                    <label htmlFor="passengers">
                        Antal Resenärer:
                        <br />
                        <input name="passengers" id="passengers" value={passengerNum ? passengerNum.toString() : ''} onFocus={e => e.target.select()} onInput={e => { /^([0-9]*)$/.test(e.target.value) && setPassengerNum(parseInt(e.target.value)) }} />
                    </label>
                    <NextButton type="submit" disabled={!trip.dept.city || !trip.dest.city || !passengerNum}>Nästa</NextButton>
                </form>
            </First>
            <Second>
                <Info>
                    <span>Res med gott samvete med GreenJet.</span>
                    <br />
                    <p>Låt oss boka resa klimatkompenserat så enkelt som möjligt för dig och dina medresenärer.</p>
                    <br />
                    <p>Res endast om du är frisk, undvik rusningstrafik om du har möjlighet och följ anvisningar ombord.</p>
                </Info>
            </Second>
        </Wrapper>
    )
}

export default FromTo