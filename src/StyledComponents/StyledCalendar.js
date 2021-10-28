import styled from 'styled-components';
import Calendar from 'react-calendar';

const StyledCalendar = styled(Calendar)`
    width: 35vw;
    min-width: 274px;
    max-width: 500px;
    height: 35vw;
    min-height: 274px;
    max-height: 500px;
    margin: 0 auto;
    font-size: 10px;
    line-height: 16px;

    .react-calendar__navigation {
        height: 12%;
        width: 52%;
        margin: 0 auto 2.5% auto;

        .react-calendar__navigation__arrow {
            display: none;
        }

        .react-calendar__navigation__label {
            background-color: white;
            font-size: 16px;
            border: none;
            border-radius: 100px;
        }
    }

    .react-calendar__month-view__weekdays {
        height: 16px;
        margin-bottom: 19px;
        font-size: 11px;
        font-weight: bold;

        .react-calendar__month-view__weekdays__weekday {
            text-align: center;

            abbr {
                text-decoration: none;

            }

        }
    }

    .react-calendar__month-view__days {

        .react-calendar__tile{
            height: calc(35vw * 0.142857);
            min-height: calc(274px * 0.142857);
            max-height: calc(500px * 0.142857);
            margin-bottom: 2%;
            font-weight: 500;
            font-size: 14px;
            background-color: rgba(0, 0, 0, 0);
            color: #7A7585;
            padding: 0;
            border: none;
            border-radius: 100%;

            :disabled {
                color: #7A758580;
            }

            abbr {
                display: flex;
                justify-content: center;
                align-items: center;
                box-sizing: border-box;
                width: 100%;
                height: 100%;
                border-radius: 100%;

                :hover {
                    cursor: pointer;
                    background-color: #39B7D480;
                }
            }

            &.react-calendar__tile--range {
                background-color: #89DDC3;
                border-radius: 0;

                &.react-calendar__tile--rangeStart {
                    border-radius: 50% 0 0 50%;
                }

                &.react-calendar__tile--rangeEnd {
                    border-radius: 0 50% 50% 0;
                }

                &.react-calendar__tile--rangeStart, &.react-calendar__tile--rangeEnd {
                    font-weight: bold;
                    color: black;

                    abbr {
                        background-color: #39B7D4;
                        border: 3px solid #128DA1;
                    }
                }

                &.react-calendar__tile--rangeBothEnds {
                    border-radius: 100%;
                }

                &.monday {
                    border-radius: 50% 0 0 50%;
                }

                &.sunday {
                    border-radius: 0 50% 50% 0;
                }
            }
        }
    }
`

export default StyledCalendar