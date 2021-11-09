import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    background-color: rgba(181, 228, 140, 0.3);
`

export const StyledMain = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    form {
        width: 371px;

        input {
            box-sizing: border-box;
            padding-left: 12px;
            height: 48px;
            background-color: white;
            font-size: 18px;
            border: 1px solid #128DA1;
            border-radius: 4px;
            
            :focus {
                outline: none;
            }

            ::placeholder {
                color: rgba(0, 0, 0, 0.29)
            }
        }

        .name {
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            input {
                width: 180px;
                margin-bottom: 8px;
            }
        }

        .rest {
            width: 300px;
            height: 291px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin: 27px auto 0 auto;

            input {
                width: 100%;
            }

            .date-of-birth {
                margin-bottom: 30px;
                
                p {
                    margin-top: 8px;
                    font-size: 12px;
                    color: #7C8DB0;
                }
            }

        }
    }

    .footnote {
        margin: 23px 0 30px 35px;
        font-size: 10px;
        width: 160px;
    }
    
    button {
        margin-bottom: 35px;
    }
`