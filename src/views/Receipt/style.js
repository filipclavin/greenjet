import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    background-color: rgba(181, 228, 140, 0.3);
`

export const StyledMain = styled.main`
    position: relative;
    height: 89vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    p {

    }

    .date {
        position: absolute;
        top: 12px;
        left: calc(50% - 180px);
    }

    .customer-info {
        position: absolute;
        top: 58px;
        left: calc(50% - 180px);
        color: #595959;

        .name {
            font-weight: bold;
        }
    }

    .price-breakdown {
        background-color: #FFFFFF;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 15px 0;
        width: 100%;

        > div {
            width: 383px;
        }

        .top {
            display: grid;
            grid-template-rows: 1fr 1fr 1fr 1fr;
            grid-template-columns: 3fr 1fr 1fr;
            grid-row-gap: 26px;

            .item {
                grid-column: 1 / 1;
            }

            .quantity {
                grid-column: 2 / 2;
            }

            .total {
                grid-column: 3 / 3;
            }

            .title {
                font-weight: bold;
                font-size: 10px;
                line-height: 16px;
                color: rgba(0, 0, 0, 0.48);
                grid-row: 1 / 1;
            }

            .quantity, .total {
                text-align: right;
            }

            hr {
                border-color: rgba(0, 0, 0, 0.1);
                grid-column: 1 / 4;
                grid-row: 1 / 1;
                width: 100%;
                height: 0;
                border-bottom: none;
                margin-top: 20px;
            }

            .entry {
                grid-column: 1 / 4;
                display: grid;
                grid-template-columns: 3fr 1fr 1fr;

                p {
                    font-size: 16px;
                    color: #595959;

                    span {
                        font-size: 12px
                    }
                }
            }
        }

        .bottom {
            margin-top: 100px;
            display: flex;
            justify-content: flex-end;
            gap: 15px;

            .title {
                font-weight: bold;
                font-size: 10px;
                line-height: 16px;
                color: rgba(0, 0, 0, 0.48);
            }

            :not(.title) {
                font-size: 16px;
                color: #595959;
                text-align: right;
            }

            .subtotal {

                font-weight: bold;
            }
        }
    }
`

export const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #595959;
    font-size: 14px;
    line-height: 19px;

    .title {
        font-weight: bold;
        font-size: 10px;
        line-height: 16px;
        color: rgba(0, 0, 0, 0.48);
    }
    
    .notes {
        width: 225px;

        a {
            color: black;
            font-weight: bold;
            text-decoration: underline black 1px;
            line-height: 30px;
        }
    }
`