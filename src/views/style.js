import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-self: flex-end;
    background-color: rgba(181, 228, 140, 0.3);

    .react-calendar {
        width: 272px;
        margin: 0 auto;
        font-weight: bold;
        font-size: 10px;
        line-height: 16px;

        .react-calendar__navigation {
            height: 32px;
            margin-bottom: 7px;
        }

        .react-calendar__month-view__weekdays {
            height: 16px;
            margin-bottom: 19px;

            abbr {
                text-decoration: none;
            }
        }

        .react-calendar__month-view__days {
            height: 200px;
        }

        .react-calendar__tile{
            padding: 0 0;
            background-color: rgba(0, 0, 0, 0);
            border: none;
            padding: 5px 4px;
        }
    }
`

export const Selection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: ${props => props.step === 1 ? '70%' : '150px'};
    background-color: #39B7D4;
    border-radius: 0 0 30px 30px;
    box-shadow: 0px 3px 22px 1px rgba(0, 0, 0, 0.25);
    margin-bottom: 25px;
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
            background-color: #B5E48C;
            color: ${props => props.formFilled ? 'black' : 'rgba(0, 0, 0, 0.25)'};
            width: fit-content;
            margin: 15px auto 0 auto;
            padding: 15px 75px;
            border-radius: 25px;
        }

        label, button {
            display: ${props => props.step === 1 ? 'block' : 'none'};
        }

    }
`

export const Info = styled.p`
    width: 93%;
    margin: 0 auto;
    color: #595959;
    line-height: 1.2rem;

    span {
        font-weight: bold;
        line-height: 1.7rem;
    }
`