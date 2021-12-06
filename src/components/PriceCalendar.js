import React, { useContext } from 'react'
import styled from 'styled-components';

import { Context } from '../Context';

const Wrapper = styled.section`
    margin-top: 25px;
    height: 130px;
    display: flex;
    align-items: center;

    > * {
        height: 100%;
        width: 150px;
        margin: 0 25px;
        display: flex;
        flex-direction: column;
    }

    .price-calendar-title {
        font-size: 14px;
        font-weight: bold;
        color: #89DDC3;
        text-align: center;
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
        margin-top: 5px;
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

    const renderDates = (dateString) => {
        const dates = []
        const baseDate = new Date(dateString)
        for (let i = -2; i < 3; i++) {
            let date = new Date(baseDate)
            date.setDate(date.getDate() + i)
            dates.push(<p className='date' key={date.getDate()}>{date.getDate()}</p>)
        }

        return dates
    }

    return (
        <Wrapper className='price-calendar'>
            <div className='depart-compare'>
                <p className='price-calendar-title'>Jämför utresedatum</p>
                <div className='bars'>
                    <div className='bar bar1' />
                    <div className='bar bar2' />
                    <div className='bar bar3' />
                    <div className='bar bar4' />
                    <div className='bar bar5' />
                </div>
                <div className='dates'>
                    {startDate && renderDates(startDate)}
                </div>
            </div>
            <div className='return-compare'>
                <p className='price-calendar-title'>Jämför returdatum</p>
                <div className='bars'>
                    <div className='bar bar1' />
                    <div className='bar bar2' />
                    <div className='bar bar3' />
                    <div className='bar bar4' />
                    <div className='bar bar5' />
                </div>
                <div className='dates'>
                    {endDate && renderDates(endDate)}
                </div>
            </div>
        </Wrapper>
    )
}

export default PriceCalendar
