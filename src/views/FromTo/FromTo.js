import { useEffect, useRef, useState, useContext } from 'react'
import { Context } from '../../Context';

import { ReactComponent as Logo } from '../../resources/logo.svg'
import { Wrapper, First, Second, Info } from './style.js'
import NextButton from '../../StyledComponents/NextButton';
import StyledCalendar from '../../StyledComponents/StyledCalendar';

const airports = require('../../airports.json')
const sweAirports = require('../../airports-se.json')

function useOutsideAlerter(ref, onOutsideClick) {
    useEffect(() => {
        // sets showDept/showDest to false on click outside
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                onOutsideClick(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

const FromTo = () => {
    const {
        inputTrip,
        setInputTrip,
        trip,
        setTrip,
        passengerNum,
        setPassengerNum,
        step,
        setStep,
        dateRange,
        setDateRange
    } = useContext(Context)
    const [showDeptList, setShowDeptList] = useState('')
    const [showDestList, setShowDestList] = useState('')

    const deptRef = useRef()
    const destRef = useRef()
    useOutsideAlerter(deptRef, setShowDeptList)
    useOutsideAlerter(destRef, setShowDestList)

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

    const renderAirports = (input, key, styleState) => {
        return filterAirports(input).map(item => {
            return input.length < 3 ? null : (
                <option key={item.iata_code} value={item.name} onClick={() => {
                    setInputTrip({ ...inputTrip, [key]: `${item.name}, ${sweAirports[airports.indexOf(item)].city} - ${item.iata_code}` })
                    setTrip({ ...trip, [key]: `${item.name}, ${sweAirports[airports.indexOf(item)].city} - ${item.iata_code}` })
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
                    <div className='autocomplete' ref={deptRef}>
                        <input
                            type="text"
                            placeholder="Från?"
                            value={inputTrip.dept}
                            onClick={() => setShowDeptList(true)}
                            onInput={e => {
                                setInputTrip({ ...inputTrip, dept: e.target.value })
                                setTrip({ ...trip, dept: '' })
                            }} />
                        <datalist className={showDeptList ? 'show-list' : null}>
                            <div>
                                {renderAirports(inputTrip.dept, 'dept', setShowDeptList)}
                            </div>
                        </datalist>
                    </div>
                    <div className='autocomplete' ref={destRef}>
                        <input
                            type="text"
                            placeholder="Till?"
                            value={inputTrip.dest}
                            onClick={() => setShowDestList(true)}
                            onInput={e => {
                                setInputTrip({ ...inputTrip, dest: e.target.value })
                                setTrip({ ...trip, dest: '' })
                            }} />
                        <datalist className={showDestList ? 'show-list' : null}>
                            <div>
                                {renderAirports(inputTrip.dest, 'dest', setShowDestList)}
                            </div>
                        </datalist>
                    </div>
                    <label htmlFor="passengers">
                        Antal Resenärer:
                        <br />
                        <input name="passengers" id="passengers" value={passengerNum} onFocus={e => e.target.select()} onInput={e => { /^([0-9]*)$/.test(e.target.value) ? setPassengerNum(e.target.value) : setPassengerNum(passengerNum) }} />
                    </label>
                    <NextButton type="submit" disabled={!trip.dept || !trip.dest || !passengerNum}>Nästa</NextButton>
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