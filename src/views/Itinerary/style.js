import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    background: linear-gradient(147.67deg, #E9F7DD 0%, #39B7D4 69.38%);
    overflow-y: hidden;

    .summaries {
        display: flex;
        justify-content: space-between;
        position: fixed;
        box-sizing: border-box;
        top: 0;
        width: 100%;
        padding: 10% 10%;
        z-index: 1;
        
        .summary {
            background-color: #D7E8EC;
            box-sizing: border-box;
            width: 104px;
            height: 210px;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 15px;
            font-weight: bold;
            padding-top: 14px;
            cursor: pointer;

            h1, h2 {
                color: white;
            }

            h1 {
                font-size: 36px;
                line-height: 42px;
            }

            h2 {
                font-size: 26px;
                line-height: 30px;
            }

            p {
                color: #128DA1;
                font-size: 20px;
                line-height: 23px;
            }

            .city {
                font-size: 16px;
                line-height: 19px;
            }

            &.selected {
                background-color: #39B7D4;
            }
        }
    }

    .konvajs-content {
        top: -70px;
    }

    a {
        position: fixed;
        bottom: 25px;
        left: 25px;
        color: white;
        text-decoration: underline 1px;
    }
`