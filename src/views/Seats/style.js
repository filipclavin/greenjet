import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    background: linear-gradient(147.67deg, #E9F7DD 0%, #39B7D4 69.38%);

    header {
        position: fixed;
        top: 0;
        width: 100vw;
        z-index: 1;
    }
    `

export const StyledMain = styled.main`
        position: relative;
        height: 100vh;
        display: flex;
        justify-content: center;
        overflow: hidden;

        .react-transform-wrapper {
            height: 100vh;
            width: 100vw;
        }

        button {
            position: absolute;
            bottom: 35px;
            left: calc(50% - 74.5px);
        }

        .progress-bar {
            position: absolute;
            top: 10vh;
            left: calc(50% - 142.5px);
            z-index: 1;
        }

        .seat-summary-wrapper {
            position: absolute;
            top: 19vh;
            left: 5vw;
            z-index: 1;

            h4 {
                font-size: 16px;
                font-weight: 500;
            }

            .seat-summary {
                background-color: #39B7D4;
                border-radius: 15px;
                padding: 10px;
                margin-bottom: 20px;
                line-height: 1.2em;
                color: white;
                min-width: 100px;
                
                h3 {
                    font-weight: 700;
                    margin-bottom: 5px;
                }
            }
        }
`