import { useState } from 'react'

import { Wrapper, StyledMain } from './style'
import Header from '../../components/Header'
import ProgressBar from '../../components/ProgressBar'
import gPay from '../../resources/g-pay.png'
import aPay from '../../resources/a-pay.png'
import NextButton from '../../components/NextButton'
import { useContext } from 'react/cjs/react.development'
import { Context } from '../../Context'
import { useNavigate } from 'react-router'

const Payment = () => {

    const [formInputs, setFormInputs] = useState({
        cardNumber: '',
        cardDate: '',
        cvc: '',
        cardName: '',
        adress: '',
        adressLn2: '',
        city: '',
        postalCode: '',
        province: '',
        country: ''
    });

    const { finalPrice, setPayeeDetails } = useContext(Context)

    const navigate = useNavigate()

    return (
        <Wrapper>
            {!finalPrice && navigate('/')}
            <Header linkTo='/carbon-offsetting' />
            <StyledMain>
                <ProgressBar step={9} />
                <div className="social-pay">
                    <img src={gPay} alt="google pay" />
                    <img src={aPay} alt="apple pay" />
                </div>
                <div className="divider">
                    <div className="line" />
                    <p>Betala med kort</p>
                    <div className="line" />
                </div>
                <form>
                    <div className="card">
                        <p>Kortnummer</p>
                        <div className="inputs-card">
                            <input value={formInputs.cardNumber} onInput={e => setFormInputs({ ...formInputs, cardNumber: e.target.value })} type="text" placeholder='1234 1234 1234 1234' />
                            <input value={formInputs.cardDate} onInput={e => setFormInputs({ ...formInputs, cardDate: e.target.value })} className='half1' type="text" placeholder='MM/ÅÅ' />
                            <input value={formInputs.cvc} onInput={e => setFormInputs({ ...formInputs, cvc: e.target.value })} className='half2' type="text" placeholder='CVC' />
                        </div>
                    </div>
                    <div className="name">
                        <p>Namn på kortet</p>
                        <input value={formInputs.cardName} onInput={e => setFormInputs({ ...formInputs, cardName: e.target.value })} className='name' type="text" />
                    </div>
                    <div className="adress">
                        <p>Adress</p>
                        <div className="inputs-adress">
                            <input value={formInputs.adress} onInput={e => setFormInputs({ ...formInputs, adress: e.target.value })} type="text" placeholder='Adress' />
                            <input value={formInputs.adressLn2} onInput={e => setFormInputs({ ...formInputs, adressLn2: e.target.value })} type="text" />
                            <input value={formInputs.city} onInput={e => setFormInputs({ ...formInputs, city: e.target.value })} className='half1' type="text" placeholder='Stad' />
                            <input value={formInputs.postalCode} onInput={e => setFormInputs({ ...formInputs, postalCode: e.target.value })} className='half2' type="text" placeholder='Postnummer' />
                            <input value={formInputs.province} onInput={e => setFormInputs({ ...formInputs, province: e.target.value })} type="text" placeholder='Provins' />
                            <input value={formInputs.country} onInput={e => setFormInputs({ ...formInputs, country: e.target.value })} type="text" placeholder='Land' />
                        </div>
                    </div>
                </form>
                <NextButton
                    disabled={!(formInputs.cardNumber && formInputs.cardDate && formInputs.cvc && formInputs.cardName && formInputs.adress && formInputs.city && formInputs.postalCode && formInputs.country)}
                    onClick={() => {
                        setPayeeDetails(formInputs)
                        navigate('/receipt')
                    }}>{finalPrice} SEK</NextButton>
            </StyledMain>
        </Wrapper>
    )
}

export default Payment
