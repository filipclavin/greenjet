import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    background-color: rgba(181, 228, 140, 0.3);
`

export const StyledMain = styled.main`
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    .main-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    button {
        margin-bottom: 35px;
    }

    .intro {
        box-sizing: border-box;
        font-size: 18px;
        font-weight: 500;
        color: #595959;
        width: 374px;
        padding-right: 1px;
        margin-top: 44.81px;
        margin-bottom: 100px;
    }

    .offset-total {
        font-weight: 500;
        font-size: 18px;
        display: flex;
        width: 103px;
        border-bottom: 4px solid black;
        margin-top: 50px;

        .sum {
            text-align: center;
            flex-grow: 1;
        }
    }

    .slider-titles {
        width: 323px;
        display: flex;
        justify-content: space-between;
        text-align: center;
        font-weight: 500;
        font-size: 18px;
        margin-left: 11px;

        * {
            width: 50px;
        }
    }

    .slider-container {
        position: relative;
        width: 276px;
        height: 22px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .slider-tick {
            width: 1px;
            height: 15px;
            background-color: #000000;
        }

        input[type=range] {
                -webkit-appearance: none;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                margin: 0;
                background: transparent;
                height: 20px;
                
                &:focus {
                    outline: none;
                }
                
                &::-webkit-slider-runnable-track {
                    margin-top: 1px;
                    width: 100%;
                    height: 1px;
                    cursor: pointer;
                    box-shadow: 0px 0px 0px #000000;
                    background: #000000;
                    border-radius: 0px;
                    border: 0px solid #000000;
                }

                &::-webkit-slider-thumb {
                    box-shadow: 0px 0px 1px #000000;
                    border: 1px solid #000000;
                    height: 18px;
                    width: 18px;
                    border-radius: 50px;
                    background: #FFFFFF;
                    cursor: pointer;
                    -webkit-appearance: none;
                    margin-top: -9px;
                }

                &:focus::-webkit-slider-runnable-track {
                    background: #000000;
                }

                &::-moz-range-track {
                    width: 100%;
                    height: 1px;
                    cursor: pointer;
                    box-shadow: 0px 0px 0px #000000;
                    background: #000000;
                    border-radius: 0px;
                    border: 0px solid #000000;
                }
                
                &::-moz-range-thumb {
                    box-shadow: 0px 0px 0px #000000;
                    border: 1px solid #000000;
                    height:18px;
                    width: 18px;
                    border-radius: 50px;
                    background: #FFFFFF;
                    cursor: pointer;
                }

                &::-ms-track {
                    width: 100%;
                    height: 1px;
                    cursor: pointer;
                    background: transparent;
                    border-color: transparent;
                    color: transparent;
                }

                &::-ms-fill-lower {
                    background: #000000;
                    border: 0px solid #000000;
                    border-radius: 0px;
                    box-shadow: 0px 0px 0px #000000;
                }

                &::-ms-fill-upper {
                    background: #000000;
                    border: 0px solid #000000;
                    border-radius: 0px;
                    box-shadow: 0px 0px 0px #000000;
                }

                &::-ms-thumb {
                    box-shadow: 0px 0px 0px #000000;
                    border: 1px solid #000000;
                    height: 18px;
                    width: 18px;
                    border-radius: 50px;
                    background: #FFFFFF;
                    cursor: pointer;
                }

                &:focus::-ms-fill-lower {
                    background: #000000;
                }

                &:focus::-ms-fill-upper {
                    background: #000000;
                }
            }
    }

    
`