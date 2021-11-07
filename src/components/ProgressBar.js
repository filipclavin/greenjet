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
        background-color: #39B7D440;
    }

    .current-step {
        background-color: #39B7D4;
    }
`

const ProgressBar = ({ step }) => {

    const divs = []

    for (let i = 1; i < 11; i++) {
        divs.push(<div key={i} className={i === step ? 'current-step' : undefined} />)
    }

    return (
        <Wrapper>
            {divs}
        </Wrapper>
    )
}

export default ProgressBar
