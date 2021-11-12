import { useContext } from "react"
import { Context } from "../../Context"

import ProgressBar from "../../components/ProgressBar"
import Header from "../../components/Header"
import { StyledMain, Wrapper } from "./style"


const CarbonOffsetting = () => {

    const { compensationMultiplier, setCompensationMultiplier } = useContext(Context)

    return (
        <Wrapper>
            <Header linkTo='/seats-back' />
            <StyledMain>
                <ProgressBar step={7} />
                <p className='intro'>Här är en text som berättar för alla som inte fattar att flyg förstör miljön, och kanske säger att desto mer du kompenserar för dina jäkla utsläpp, desto större chans är det att du kan undvika att hamna i helvetet!</p>
                <input type="range" min='0' max='1' step='0.01' value={compensationMultiplier} onInput={e => setCompensationMultiplier(e.target.value)} />
            </StyledMain>
        </Wrapper>
    )
}

export default CarbonOffsetting
