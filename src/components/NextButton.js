import styled from 'styled-components';

const NextButton = styled.button`
    background-color: #B5E48C;
    width: fit-content;
    padding: 15px 75px;
    border: none;
    border-radius: 25px;
    color: black;
    cursor: pointer;
    align-self: center;

    :disabled {
        color: rgba(0, 0, 0, 0.25);
        cursor: default;
    }
`

export default NextButton