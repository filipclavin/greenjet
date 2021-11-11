import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-top: 36px;
    height: 10px;
    width: 285px;
    display: flex;
    justify-content: space-between;

    div {
        height: 100%;
        width: 15px;
        border-radius: 3px;
        background-color: ${props => props.white ? '#FFFFFF40' : '#39B7D440'};
    }

    .current-step {
        background-color: ${props => props.white ? '#FFFFFF' : '#39B7D4'};
    }
`

const ProgressBar = ({ step, white }) => {

    const divs = []

    for (let i = 1; i < 11; i++) {
        divs.push(<div key={i} className={i === step ? 'current-step' : undefined} />)
    }

    return (
        <Wrapper white={white} className='progress-bar'>
            {divs}
        </Wrapper>
    )
}

export default ProgressBar
