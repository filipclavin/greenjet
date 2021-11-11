import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../../Context'

import Header, { StyledHeader } from '../../components/StyledHeader'
import ProgressBar from '../../components/ProgressBar'

import { StyledMain, Wrapper } from './style'
import NextButton from '../../components/NextButton'
import { useEffect } from 'react/cjs/react.development'

const TravelProfile = () => {

    const [formInputs, setFormInputs] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        prefix: '',
        birthDate: '',
        email: '',
        phone: '',
        passport: ''
    })

    const { trip, passengerNum, passengers, setPassengers } = useContext(Context)

    const navigate = useNavigate()

    return (
        <Wrapper>
            {!trip.dept.city && navigate('/')}
            <Header linkTo='/details' />
            <StyledMain>
                <ProgressBar step={5} />
                <form>
                    <div className='name'>
                        <input value={formInputs.firstName} onInput={(e) => setFormInputs({ ...formInputs, firstName: e.target.value })} type="text" placeholder='Förnamn*' required />
                        <input value={formInputs.middleName} onInput={(e) => setFormInputs({ ...formInputs, middleName: e.target.value })} type="text" placeholder='Mellannamn' />
                        <input value={formInputs.lastName} onInput={(e) => setFormInputs({ ...formInputs, lastName: e.target.value })} type="text" placeholder='Efternamn*' required />
                        <input value={formInputs.prefix} onInput={(e) => setFormInputs({ ...formInputs, prefix: e.target.value })} type="text" placeholder='Prefix' />
                    </div>
                    <div className='rest'>
                        <div className='date-of-birth'>
                            <input value={formInputs.birthDate} onInput={(e) => setFormInputs({ ...formInputs, birthDate: e.target.value })} type="text" placeholder='Födelsedatum*' required />
                            <p>DD/MM/YY</p>
                        </div>
                        <input value={formInputs.email} onInput={(e) => setFormInputs({ ...formInputs, email: e.target.value })} type="email" placeholder='Email*' required />
                        <input value={formInputs.phone} onInput={(e) => setFormInputs({ ...formInputs, phone: e.target.value })} type="text" placeholder='Telefon*' required />
                        <input value={formInputs.passport} onInput={(e) => setFormInputs({ ...formInputs, passport: e.target.value })} type="text" placeholder='Passnummer*' required />
                    </div>
                    <p className='footnote'>*Se till att all information stämmer överens med ditt pass.</p>
                </form>
                {passengers.length >= passengerNum - 1 ?
                    <NextButton
                        disabled={!(formInputs.firstName && formInputs.lastName && formInputs.birthDate && formInputs.email && formInputs.phone && formInputs.passport) && !(passengers.length >= passengerNum)}
                        onClick={() => {
                            !(passengers.length >= passengerNum) && setPassengers([...passengers, formInputs])
                            navigate('/seats')
                        }}>Välj Sittplats</NextButton>
                    :
                    <NextButton
                        disabled={!(formInputs.firstName && formInputs.lastName && formInputs.birthDate && formInputs.email && formInputs.phone && formInputs.passport)}
                        onClick={() => {
                            setPassengers([...passengers, formInputs])
                            setFormInputs({
                                firstName: '',
                                middleName: '',
                                lastName: '',
                                prefix: '',
                                birthDate: '',
                                email: '',
                                phone: '',
                                passport: ''
                            })
                        }}>{passengers.length + 1} / {passengerNum}</NextButton>
                }
            </StyledMain>
        </Wrapper >
    )
}

export default TravelProfile
