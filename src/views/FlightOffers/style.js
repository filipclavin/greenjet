import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    background-color: rgba(181, 228, 140, 0.3);

`

export const StyledMain = styled.main`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .offer-list {
        height: 60vh;
        overflow-y: auto;

        .offer {
            position: relative;
            display: flex;
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
                align-self: center;

                .outgoing, .returning {
                    width: 250px;
                    display: flex;
                    justify-content: space-between;

                }

                .left-side {

                    .iatas {
                        color: #128DA1;
                    }
                }
                
                hr {
                    width: 270px;
                    float: left;
                }
            }
            

            .price {
                position: absolute;
                bottom: 10px;
                right: 10px;
                color: #39B7D4;
                font-size: 22px;
                font-weight: bold;
            }
        }
    }
`