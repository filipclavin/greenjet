import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 88vh;
    background-color: rgba(181, 228, 140, 0.3);
    border-radius: 0 0 25px 25px;
    box-shadow: 0px 3px 22px 1px rgba(0, 0, 0, 0.25);
`

export const StyledHeader = styled.header`
    height: 192px;
    background-color: #39B7D4;
    border-radius: 0 0 25px 25px;
    box-shadow: 0px 3px 22px 1px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 12.5%;

`

export const StyledMain = styled.main`
    height: calc(88vh - 192px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .next-button {
        margin-bottom: 20px;
    }

`