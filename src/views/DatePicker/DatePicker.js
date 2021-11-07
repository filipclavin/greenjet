import { useContext } from 'react'
import { Context } from '../../Context'
import { Wrapper, StyledHeader, StyledMain } from './style'

import ProgressBar from '../../components/ProgressBar';
import StyledCalendar from '../../components/StyledCalendar';
import NextButton from '../../components/NextButton';
import AutoComplete from '../../components/AutoComplete';

const DatePicker = () => {

    const {
        dateRange,
        setDateRange,
        inputTrip,
        setInputTrip,
        trip,
        setTrip
    } = useContext(Context)

    return (
        <Wrapper>
            <StyledHeader>
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
            </StyledHeader>
            <StyledMain>
                <ProgressBar />
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
            </StyledMain>
        </Wrapper>
    )
}

export default DatePicker
