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

    img {
        cursor: pointer;
    }

    button {
        margin: 35px;
    }

    .social-pay {
        width: 324px;
        display: flex;
        justify-content: space-between;
    }

    .divider {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 327px;
        color: #9D9D9D;
        font-size: 12px;
        line-height: 14px;

        .line {
            height: 1px;
            width: 96px;
            background-color: #9D9D9D;
        }
    }

    form {
        width: 325px;
        height: 397px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        p {
            font-size: 13px;
            line-height: 15px;
            color: #595959;
            margin-bottom: 9px;
        }

        input {
            box-sizing: border-box;
            border-radius: 0;
            border: 1px solid #D1D1D1;
            font-size: 13px;
            line-height: 15px;
            height: 35px;
            width: 100%;
            padding-left: 17px;
            
            :focus {
                outline: none;
            }

            ::placeholder {
                color: #CDCDCD;
            }
        }

        .name {
            width: 100%;
        }
        
        .inputs-card {
            display: grid;
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr 1fr;

            input {
                grid-column: 1 / 3;
            }

            .half1 {
                grid-column: 1 / 1;
                grid-row: 2;
            }

            .half2 {
                grid-column: 2 / 2;
                grid-row: 2;
            }
        }

        .inputs-adress {
            display: grid;
            grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
            grid-template-columns: 1fr 1fr;

            input {
                grid-column: 1 / 3;
            }

            .half1 {
                grid-column: 1 / 1;
                grid-row: 3;
            }

            .half2 {
                grid-column: 2 / 2;
                grid-row: 3;
            }
        }
    }
`