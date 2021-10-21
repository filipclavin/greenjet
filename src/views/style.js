import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: ${props => props.step === 2 ? '88%' : '100%'};
    background-color: rgba(181, 228, 140, 0.3);
    border-radius: ${props => props.step === 2 ? '0 0 25px 25px' : '0'};
    box-shadow: 0px 3px 22px 1px rgba(0, 0, 0, 0.25);

    `

export const First = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: ${props => props.step === 1 ? '70%' : '150px'};
    background-color: #39B7D4;
    border-radius: 0 0 30px 30px;
    box-shadow: 0px 3px 22px 1px rgba(0, 0, 0, 0.25);
    padding: 5px 0;
    color: white;
    overflow: hidden;
    
    transition: height 0.3s;
    
    svg {
        height: 40%;
        width: fit-content;
        margin: 0 auto;
        display: ${props => props.step === 1 ? 'block' : 'none'};
    }
    
    form {
        width: 75%;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        
        * {
            font-size: 18px;
            margin: 7.5px 0;
            border: none;
        }
        
        input {
            background-color: #128DA1;
            padding: 10px;
            color: white;
            
            ::placeholder {
                color: white;
            }
        }

        #passengers {
            margin-top: 5px;
            padding: 5px 10px;
            width: ${props => props.passengerNum.length ? props.passengerNum.length * 10 + 2 + 'px' : 12 + 'px'};

            transition: all 0.075s;
        }
        
        button {
            margin: 15px auto 0 auto;
        }
        
        label, button {
            display: ${props => props.step === 1 ? 'block' : 'none'};
        }
        
    }
    `

export const Second = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding-bottom: 20px;
    flex-grow: 1;
    
    .react-calendar {
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
            height: 32px;
            margin-bottom: 7px;
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
            height: calc(35vw - 74px);
            min-height: calc(274px - 74px);
            max-height: calc(500px - 74px);
            
            .react-calendar__tile{
                height: calc(35vw * 0.142857);
                min-height: calc(274px * 0.142857);
                max-height: calc(500px * 0.142857);
                font-weight: 500;
                font-size: 14px;
                background-color: rgba(0, 0, 0, 0);
                color: #7A7585;
                padding: 0;
                border: none;
                border-radius: 100%;
    
                :hover {
                    cursor: pointer;
                    background-color: #39B7D480;
                }
            }

            .react-calendar__tile--range {
                background-color: #89DDC3;
                border-radius: 0;
            }

            .react-calendar__tile--range.react-calendar__tile--rangeStart{
                border-radius: 50% 0 0 50%;
            }

            .react-calendar__tile--range.react-calendar__tile--rangeEnd{
                border-radius: 0 50% 50% 0;
            }

            .react-calendar__tile--range.react-calendar__tile--rangeBothEnds{
                border-radius: 100%;
            }
        
        }
    }
`

export const Info = styled.p`
    width: 385px;
    color: #595959;
    line-height: 1.2rem;

    span {
        font-weight: bold;
        line-height: 1.7rem;
    }
`