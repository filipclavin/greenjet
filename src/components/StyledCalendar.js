import styled from 'styled-components';
import Calendar from 'react-calendar';

const StyledCalendar = styled(Calendar)`
    min-width: 272px;
    width: 45vw;
    max-width: 420px;
    margin: 0 auto;
    font-size: 10px;
    line-height: 16px;
    box-sizing: content-box;

    .react-calendar__navigation {
        aspect-ratio: 272 / 32;
        margin: 0 auto 3.5% auto;
        justify-content: space-between;
        
        .react-calendar__navigation__label {
            flex-grow: 0 !important;
            aspect-ratio: 142 / 32;
            background-color: white;
            font-size: 16px;
            border: none;
            border-radius: 100px;
        }
        
        .react-calendar__navigation__prev2-button, .react-calendar__navigation__next2-button {
            display: none;
        }

        .react-calendar__navigation__arrow {
            aspect-ratio: 1;
            padding: 0;
            margin: 0 1%;
            font-size: 20px;
            background-color: rgba(0, 0, 0, 0);
            border: none;
            border-radius: 100%;

            :hover {
                cursor: pointer;
            }
        }
    }

    .react-calendar__viewContainer {

        .react-calendar__month-view {

            .react-calendar__month-view__weekdays {
                aspect-ratio: 272 / 24;
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
                    :nth-child(-n+7) {
                        margin: 0;
                    }
                    
                    aspect-ratio: 1;
                    margin-top: 2.5%;
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
                    }
                    &:not(:disabled) abbr:hover {
                        cursor: pointer;
                        background-color: #39B7D480;
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

                        &.monday:not(.react-calendar__tile--rangeEnd) {
                            border-radius: 50% 0 0 50%;
                        }

                        &.sunday:not(.react-calendar__tile--rangeStart) {
                            border-radius: 0 50% 50% 0;
                        }
                    }
                }
            }
        }

        .react-calendar__year-view, .react-calendar__decade-view, .react-calendar__century-view {

            > * {
                aspect-ratio: 420 / 412.5;
                justify-content: center;

                > * {
                    border: 1px solid #00000080;
                    
                    &:not(:disabled):hover {
                        cursor: pointer;
                        background-color: #39B7D480;;
                    }
                }
            }
        }
    }

    

    
`

export default StyledCalendar