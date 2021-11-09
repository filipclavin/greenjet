import styled from 'styled-components';

const NextButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #B5E48C;
    height: 41px;
    width: 149px;
    border: none;
    border-radius: 25px;
    color: black;
    font-size: 18px;
    cursor: pointer;

    :disabled {
        color: rgba(0, 0, 0, 0.25);
        cursor: default;
    }
`

export default NextButton