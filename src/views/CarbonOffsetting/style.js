import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    background-color: rgba(181, 228, 140, 0.3);
`

export const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    .intro {
        box-sizing: border-box;
        font-size: 18px;
        font-weight: 500;
        color: #595959;
        width: 374px;
        padding-right: 1px;
        margin-top: 44.81px;
    }

    input[type=range] {
        position: relative;
        appearance: none;
        width: 276px;
        background: transparent;

        ::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 100%;
            background-color: white;
            border: 1px solid black;
            overflow: visible;
            cursor: pointer;
        }

        ::-moz-range-thumb {
            -moz-appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 100%;
            background-color: white;
            border: 1px solid black;
            overflow: visible;
            cursor: pointer;
        }
        
        ::-moz-focus-outer {
            border: 0;
        }

        ::-webkit-slider-runnable-track {
            width: 100%;
            height: 10px;
            cursor: pointer;
            background: transparent;
            border: 1px solid black;
        }
    }
`