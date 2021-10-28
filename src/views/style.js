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