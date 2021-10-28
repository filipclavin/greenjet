import { useEffect, useState } from 'react'

import { ReactComponent as Logo } from '../resources/logo.svg'
import { Wrapper, First, Second, Info } from './style.js'
import NextButton from '../StyledComponents/NextButton';
import StyledCalendar from '../StyledComponents/StyledCalendar';


const FromTo = () => {

    const [dept, setDept] = useState('')
    const [dest, setDest] = useState('')
    const [passengerNum, setPassengerNum] = useState('1')
    const [formFilled, setFormFilled] = useState(false)
    const [step, setStep] = useState(1)
    const [dateRange, setDateRange] = useState();

    useEffect(() => {
        if (dept && dest && passengerNum > 0) {
            setFormFilled(true)
        } else {
            setFormFilled(false)
        }
    }, [dept, dest, passengerNum])

    useEffect(() => {
        console.log(dateRange)
    })

    const handleSubmit = e => {
        e.preventDefault()
        setStep(2)
    }

    return (
        <Wrapper step={step}>
            <First formFilled={formFilled} passengerNum={passengerNum} step={step}>
                <Logo />
                <form onSubmit={handleSubmit}>
                    <input value={dept} type="text" placeholder="Från?" onInput={e => setDept(e.target.value)} />
                    <input value={dest} type="text" placeholder="Till?" onInput={e => setDest(e.target.value)} />
                    <label htmlFor="passengers">
                        Antal Resenärer:
                        <br />
                        <input name="passengers" id="passengers" value={passengerNum} onFocus={e => e.target.select()} onInput={e => { /^([0-9]*)$/.test(e.target.value) ? setPassengerNum(e.target.value) : setPassengerNum(passengerNum) }} />
                    </label>
                    <NextButton type="submit" disabled={!formFilled}>Nästa</NextButton>
                </form>
            </First>
            <Second>
                {step === 1 ?
                    <Info>
                        <span>Res med gott samvete med GreenJet.</span>
                        <br />
                        <p>Låt oss boka resa klimatkompenserat så enkelt som möjligt för dig och dina medresenärer.</p>
                        <br />
                        <p>Res endast om du är frisk, undvik rusningstrafik om du har möjlighet och följ anvisningar ombord.</p>
                    </Info>
                    :
                    <>
                        <StyledCalendar
                            onChange={setDateRange}
                            value={dateRange}
                            minDate={new Date()}
                            formatMonth={(locale, date) => ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'][date.getMonth()]}
                            formatMonthYear={(locale, date) => `${['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'][date.getMonth()]} ${date.getFullYear()}`}
                            formatShortWeekday={(locale, date) => ['SÖN', 'MÅN', 'TIS', 'ONS', 'TOR', 'FRE', 'LÖR'][date.getDay()]}
                            selectRange
                            showFixedNumberOfWeeks
                            tileClassName={({ date, view }) =>
                                view === "month" ?
                                    date.getDay() === 1 ? "monday" :
                                        date.getDay() === 0 ? "sunday" : null : null
                            }
                        />
                        <NextButton disabled={!dateRange}>Nästa</NextButton>
                    </>
                }

            </Second>
        </Wrapper>
    )
}

export default FromTo