import { useState } from 'react'
import styled from 'styled-components'

import { ReactComponent as Logo } from '../resources/logo.svg'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-self: flex-end;
    background-color: rgba(181, 228, 140, 0.3);
`

const Selection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 70%;
    background-color: #39B7D4;
    border-radius: 0 0 30px 30px;
    box-shadow: 0px 3px 22px 1px rgba(0, 0, 0, 0.25);
    margin-bottom: 25px;
    color: white;
    
    svg {
        height: 40%;
        width: fit-content;
        margin: 0 auto;
    }

    form {
        width: 75%;
        display: flex;
        flex-direction: column;
        margin: 0 auto;

        * {
            font-size: 18px;
            margin-top: 15px;
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
            color: ${props => props.dept.length && props.dest.length && props.passengerNum.length ? 'black' : 'rgba(0, 0, 0, 0.25)'};
            width: fit-content;
            margin: 15px auto 0 auto;
            padding: 15px 75px;
            border-radius: 25px;
        }

    }
`

const Info = styled.p`
    width: 93%;
    margin: 0 auto;
    color: #595959;
    line-height: 1.2rem;

    span {
        font-weight: bold;
        line-height: 1.7rem;
    }
`

const FromTo = () => {

    const [dept, setDept] = useState('')
    const [dest, setDest] = useState('')
    const [passengerNum, setPassengerNum] = useState('1')

    return (
        <Wrapper>
            <Selection dept={dept} dest={dest} passengerNum={passengerNum}>
                <Logo />
                <form>
                    <input value={dept} type="text" placeholder="Från?" onInput={e => setDept(e.target.value)} />
                    <input value={dest} type="text" placeholder="Till?" onInput={e => setDest(e.target.value)} />
                    <label htmlFor="passengers">
                        Antal Resenärer:
                        <br />
                        <input name="passengers" id="passengers" value={passengerNum} onFocus={e => e.target.select()} onInput={e => { /^([0-9]*)$/.test(e.target.value) ? setPassengerNum(e.target.value) : setPassengerNum(passengerNum) }} />
                    </label>
                    <button type="submit">Nästa</button>
                </form>
            </Selection>
            <Info>
                <span>Res med gott samvete med GreenJet.</span>
                <br />
                Låt oss boka resa klimatkompenserat så enkelt som möjligt för dig och dina medresenärer.
                <br />
                <br />
                Res endast om du är frisk, undvik rusningstrafik om du har möjlighet och följ anvisningar ombord.
            </Info>
        </Wrapper>
    )
}

export default FromTo