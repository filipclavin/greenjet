import styled from 'styled-components'

export const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: rgba(181, 228, 140, 0.3);
`

export const First = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 70%;
    background-color: #39B7D4;
    border-radius: 0 0 30px 30px;
    box-shadow: 0px 3px 22px 1px rgba(0, 0, 0, 0.25);
    padding: 5px 0;
    color: white;
    
    transition: height 0.3s;
    
    svg {
        height: 40%;
        width: fit-content;
        margin: 0 auto;
        display: block;
    }
    
    form {
        width: 75%;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        
        label {
            margin-bottom: 7.5px;
        }
        
        #passengers {
            background-color: #128DA1;
            color: white;
            font-size: 18px;
            border: none;

            :focus {
                outline: none;
            }

            margin-top: 5px;
            padding: 5px 10px;
            width: ${props => props.passengerNum && props.passengerNum.toString().length ? props.passengerNum.toString().length * 10.1 + 1 + 'px' : 10 + 'px'};

            transition: all 0.075s;
        }
        
        label {
            display: block;
        }

        button {
            align-self: center;
            margin-top: 20px;
        }
    }
    `

export const Second = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
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