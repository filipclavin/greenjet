import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    background-color: rgba(181, 228, 140, 0.3);
`

export const StyledMain = styled.main`
    position: relative;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .flight-details {
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        > * {
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
            box-sizing: border-box;
            width: 383px;
            height: 192px;
            background-color: #FFFFFF;
            border: 1px solid #128DA1;
            border-radius: 25px;
            padding: 15px;

            h1 {
                font-size: 29px;
                font-weight: 500;
                color: #128DA1;

                span {
                    margin-left: 10px; 
                    font-size: 24px;
                    font-weight: 600;
                    color: #B5E48C;
                }
            }

            .left {
                max-width: 65%;

                .itinerary {
                    margin-top: 11px;
                    display: flex;
                    height: 120px;
    
                    .itinerary-left {
                        box-sizing: border-box;
                        height: 100%;
                        padding: 2px 0 3px 0;
                        margin-right: 6px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: center;
    
                        .line {
                            background-color: black;
                            width: 1px;
                            height: 20px;
                        }
                    }
    
                    .itinerary-right {
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
        
                        p {
                            display: flex;
                            align-items: center;
                            font-size: 14px;
                            font-weight: 500;
        
                            span {
                                flex-wrap: wrap;
                                margin-left: 6px;
                                font-size: 10px;
                                font-weight: 300;
                            }
                        }
    
                    }
    
                    .branded-fares {
                        position: absolute;
                        right: 30px;
                    }
                }
            }

        }
    }

    .next-button {
        margin-bottom: 35px;
    }

`