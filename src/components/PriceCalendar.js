import React, { useContext } from 'react'
import styled from 'styled-components';

import { Context } from '../Context';

const Wrapper = styled.section`
    display: flex;
    align-items: center;
    flex-grow: 1;

    > * {
        height: 170px;
        margin: 0 25px;
        display: flex;
        flex-direction: column;
    }

    .bars, .dates {
        display: flex;
        justify-content: space-between;

    }

    .bars {
        flex-grow: 1;
        align-items: flex-end;
    }

    .date {
        font-size: 14px;
        font-weight: 600;
        width: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .bar {
        width: 18px;
        background-color: #B5E48C;
        border-radius: 5px 5px 0 0;
        margin-bottom: 5px;

        &.bar3 {
            background-color: #89DDC3;
        }
    }

    .depart-compare {

        .bar1 {
            height: 35%;
        }

        .bar2 {
            height: 61%;
        }

        .bar3 {
            height: 50%;
        }

        .bar4 {
            height: 35%;
        }

        .bar5 {
            height: 50%;
        }
    }

    .return-compare {

        .bar1 {
            height: 45%;
        }

        .bar2 {
            height: 42%;
        }

        .bar3 {
            height: 21%;
        }

        .bar4 {
            height: 53%;
        }

        .bar5 {
            height: 33%;
        }
    }

`

//limited by API, so could not get real date comparisons
const PriceCalendar = () => {

    const { startDate, endDate } = useContext(Context)

    const renderDates = (baseDate) => {
        baseDate = Number(baseDate.slice(8, 10))
        console.log(baseDate);
        const dates = []
        for (let i = -2; i < 3; i++) {
            dates.push(<p key={i + 3} className='date'>{baseDate + i}</p>)
        }
        console.log(dates);
        return dates
    }

    return (
        <Wrapper className='price-calendar'>
            <div className='depart-compare'>
                <p>Jämför utresedatum</p>
                <div className='bars'>
                    <div className='bar bar1' />
                    <div className='bar bar2' />
                    <div className='bar bar3' />
                    <div className='bar bar4' />
                    <div className='bar bar5' />
                </div>
                <div className='dates'>
                    {renderDates(startDate)}
                </div>
            </div>
            <div className='return-compare'>
                <p>Jämför utresedatum</p>
                <div className='bars'>
                    <div className='bar bar1' />
                    <div className='bar bar2' />
                    <div className='bar bar3' />
                    <div className='bar bar4' />
                    <div className='bar bar5' />
                </div>
                <div className='dates'>
                    {renderDates(endDate)}
                </div>
            </div>
        </Wrapper>
    )
}

export default PriceCalendar
