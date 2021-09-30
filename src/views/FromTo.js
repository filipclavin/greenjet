import { useEffect, useState } from 'react'
import Calendar from 'react-calendar';

import { ReactComponent as Logo } from '../resources/logo.svg'
import { Wrapper, Selection, Info } from './style.js'


const FromTo = () => {

    const [dept, setDept] = useState('')
    const [dest, setDest] = useState('')
    const [passengerNum, setPassengerNum] = useState('1')
    const [formFilled, setFormFilled] = useState(false)
    const [step, setStep] = useState(1)
    const [value, onChange] = useState(new Date());

    useEffect(() => {
        if (dept && dest && passengerNum > 0) {
            setFormFilled(true)
        } else {
            setFormFilled(false)
        }
    }, [dept, dest, passengerNum])

    const handleSubmit = e => {
        e.preventDefault()
        setStep(2)
    }

    return (
        <Wrapper>
            <Selection formFilled={formFilled} passengerNum={passengerNum} step={step}>
                <Logo />
                <form onSubmit={handleSubmit}>
                    <input value={dept} type="text" placeholder="Från?" onInput={e => setDept(e.target.value)} />
                    <input value={dest} type="text" placeholder="Till?" onInput={e => setDest(e.target.value)} />
                    <label htmlFor="passengers">
                        Antal Resenärer:
                        <br />
                        <input name="passengers" id="passengers" value={passengerNum} onFocus={e => e.target.select()} onInput={e => { /^([0-9]*)$/.test(e.target.value) ? setPassengerNum(e.target.value) : setPassengerNum(passengerNum) }} />
                    </label>
                    <button type="submit" disabled={!formFilled}>Nästa</button>
                </form>
            </Selection>
            {step === 1 ? <Info>
                <span>Res med gott samvete med GreenJet.</span>
                <br />
                Låt oss boka resa klimatkompenserat så enkelt som möjligt för dig och dina medresenärer.
                <br />
                <br />
                Res endast om du är frisk, undvik rusningstrafik om du har möjlighet och följ anvisningar ombord.
            </Info>
                :
                <Calendar
                    onChange={onChange}
                    value={value}
                />
            }
        </Wrapper>
    )
}

export default FromTo