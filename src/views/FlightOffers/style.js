import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    background-color: rgba(181, 228, 140, 0.3);

`

export const StyledHeader = styled.header`
    height: 10%;
    border-radius: 0 0 25px 25px;
    box-shadow: 0px 3px 22px 1px rgba(0, 0, 0, 0.25);
    background-color: #39B7D4;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: 600;

    h1 {
        color: #128DA1;
    }

`

export const StyledMain = styled.main`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .offer-list {
        max-height: 468px;
        overflow-y: auto;

        .offer {
            box-sizing: border-box;
            font-size: 12px;
            height: 103px;
            width: 370px;
            background-color: white;
            border: solid #128DA1 1px;
            border-radius: 15px;
            padding: 10px;
            margin-bottom: 14px;

            cursor: pointer;
            
            .info {
                width: 270px;
                display: flex;
                justify-content: space-between;

                .left-side {

                    .iatas {
                        margin-top: 2.5px;
                        color: #128DA1;
                    }
                }
                
            }

            hr {
                width: 270px;
                float: left;
            }

            .price {
                color: #39B7D4;
                font-size: 22px;
                font-weight: bold;
                float: right;
            }
        }
    }
`