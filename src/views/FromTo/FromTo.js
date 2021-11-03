import { useEffect, useState } from 'react'

import { ReactComponent as Logo } from '../../resources/logo.svg'
import { Wrapper, First, Second, Info } from './style.js'
import NextButton from '../../StyledComponents/NextButton';
import StyledCalendar from '../../StyledComponents/StyledCalendar';

const airports = require('../../airports.json')
const sweAirports = require('../../airports-se.json')

const FromTo = () => {

    const [dept, setDept] = useState('')
    const [dest, setDest] = useState('')
    const [showDeptList, setShowDeptList] = useState('')
    const [showDestList, setShowDestList] = useState('')
    const [passengerNum, setPassengerNum] = useState('1')
    const [step, setStep] = useState(1)
    const [dateRange, setDateRange] = useState();

    const filterAirports = (str) => {
        const query = str.toLocaleLowerCase()

        return airports.filter(item => {
            return (
                item.city.toLocaleLowerCase().startsWith(query) ||
                item.country.toLocaleLowerCase().startsWith(query) ||
                item.name.toLocaleLowerCase().startsWith(query) ||
                item.iata_code.toLocaleLowerCase().startsWith(query) ||

                sweAirports[airports.indexOf(item)].city.toLocaleLowerCase().startsWith(query) ||
                sweAirports[airports.indexOf(item)].country.toLocaleLowerCase().startsWith(query) ||
                item.name.toLocaleLowerCase().startsWith(query)
            )
        })
    }

    const renderAirports = (str, dataState, styleState) => {
        return filterAirports(str).map(item => {
            return str.length < 3 ? null : (
                <option key={item.iata_code} value={item.name} onClick={() => {
                    dataState(`${item.name}, ${sweAirports[airports.indexOf(item)].city} - ${item.iata_code}`)
                    styleState(false)
                }}>{item.name}, {sweAirports[airports.indexOf(item)].city} - {item.iata_code}</option>
            )
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setStep(2)
    }

    return (
        <Wrapper step={step}>
            <First passengerNum={passengerNum} step={step}>
                <Logo />
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Från?"
                        value={dept}
                        onClick={() => setShowDeptList(true)}
                        onInput={e => setDept(e.target.value)} />
                    <datalist className={showDeptList ? 'show-list' : null}>
                        <div>
                            {renderAirports(dept, setDept, setShowDeptList)}
                        </div>
                    </datalist>
                    <input
                        type="text"
                        placeholder="Till?"
                        value={dest}
                        onClick={() => setShowDestList(true)}
                        onInput={e => setDest(e.target.value)} />
                    <datalist className={showDestList ? 'show-list' : null}>
                        <div>
                            {renderAirports(dest, setDest, setShowDestList)}
                        </div>
                    </datalist>
                    <label htmlFor="passengers">
                        Antal Resenärer:
                        <br />
                        <input name="passengers" id="passengers" value={passengerNum} onFocus={e => e.target.select()} onInput={e => { /^([0-9]*)$/.test(e.target.value) ? setPassengerNum(e.target.value) : setPassengerNum(passengerNum) }} />
                    </label>
                    <NextButton type="submit" disabled={!dept || !dest || !passengerNum}>Nästa</NextButton>
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