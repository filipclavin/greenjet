import { useContext } from 'react';
import { Context } from '../Context';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



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

const Header = ({ linkTo }) => {

    const { trip } = useContext(Context)

    return (
        <StyledHeader>
            <Link className='back-link' to={linkTo}>&lt;</Link>
            <h1>{trip.dept.city} - {trip.dest.city}</h1>
        </StyledHeader>
    )
}

export default Header
