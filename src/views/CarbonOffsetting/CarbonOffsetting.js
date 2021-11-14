import { useContext } from "react"
import { Context } from "../../Context"
import { useNavigate } from "react-router"

import ProgressBar from "../../components/ProgressBar"
import Header from "../../components/Header"
import { StyledMain, Wrapper } from "./style"
import NextButton from "../../components/NextButton"


const CarbonOffsetting = () => {

    const { compensationMultiplier, setCompensationMultiplier, flightDetails, setFinalPrice } = useContext(Context)

    const navigate = useNavigate()

    return (
        <Wrapper>
            {!flightDetails && navigate('/')}
            <Header linkTo='/seats-back' />
            <StyledMain>
                <ProgressBar step={8} />
                <div className='main-content'>
                    <p className='intro'>Här är en text som berättar för alla som inte fattar att flyg förstör miljön, och kanske säger att desto mer du kompenserar för dina jäkla utsläpp, desto större chans är det att du kan undvika att hamna i helvetet!</p>
                    <div className='slider-titles'>
                        <p>0%</p>
                        <p>50%</p>
                        <p>100%</p>
                    </div>
                    <div className='slider-container'>
                        <div className='slider-tick' />
                        <div className='slider-tick' />
                        <div className='slider-tick' />
                        <input className='slider' type="range" min='0' max='1' step='0.05' value={compensationMultiplier} onInput={e => setCompensationMultiplier(e.target.value)} />
                    </div>
                    <div className='offset-total'>
                        <p className='sum'>{Math.floor(flightDetails.price * 0.5 * compensationMultiplier)}</p>
                        <p>Kr</p>
                    </div>
                </div>
                <NextButton onClick={() => {
                    setFinalPrice(flightDetails.price + Math.floor(flightDetails.price * 0.5 * compensationMultiplier))
                    navigate('/payment')
                }}>Kompostera!</NextButton>
            </StyledMain>
        </Wrapper>
    )
}

export default CarbonOffsetting
