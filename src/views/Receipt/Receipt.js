import ProgressBar from "../../components/ProgressBar";
import Header from "../../components/Header";
import { Wrapper, StyledMain, StyledFooter } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../Context";

const Receipt = () => {

    const { trip, startDate, endDate, passengerNum, payeeDetails, flightDetails, finalPrice, compensationMultiplier } = useContext(Context)
    const navigate = useNavigate()

    const today = new Date()
    const todayDate = today.getDate()
    const months = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'Oktober', 'November', 'December']
    const todayMonth = months[today.getMonth() - 1]
    const todayYear = today.getFullYear()

    const formatDate = date => {
        const d = new Date(date)
        const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Okt', 'Nov', 'Dec']
        return `${d.getDate()} ${shortMonths[d.getMonth() - 1]} ${d.getFullYear()}`
    }

    return (
        <>
            {!(trip.dept.iata && startDate && endDate && passengerNum && payeeDetails.cardName && flightDetails.price && finalPrice && compensationMultiplier) ? navigate('/') :
                <Wrapper>
                    <Header title='Kvitto' />
                    <StyledMain>
                        <p className='date'>{todayDate} {todayMonth} {todayYear}</p>
                        <ProgressBar step={10} />
                        <div className='customer-info'>
                            <p className='name'>{payeeDetails.cardName}</p>
                            <p>{payeeDetails.adress}</p>
                            {payeeDetails.adressLn2 && <p>{payeeDetails.adressLn2}</p>}
                            <p>Kort</p>
                        </div>
                        <section className='price-breakdown'>
                            <div className="top">
                                <p className='item title'>ITEM</p>
                                <p className='quantity title'>QTY</p>
                                <p className='total title'>TOTAL</p>
                                <hr />
                                <div className="entry">
                                    <p className='item'>Flygbiljett {trip.dept.iata} - {trip.dest.iata}<br /><span>{formatDate(startDate)}</span></p>
                                    <p className='quantity'>{passengerNum}</p>
                                    <p className='total'>{(flightDetails.price / 2).toString().includes('.') && (flightDetails.price / 2).toString().split('.')[1].length === 1 ? (flightDetails.price / 2) + '0' : flightDetails.price / 2} SEK</p>
                                </div>
                                <div className="entry">
                                    <p className='item'>Flygbiljett {trip.dest.iata} - {trip.dept.iata} <br /><span>{formatDate(endDate)}</span></p>
                                    <p className='quantity'>{passengerNum}</p>
                                    <p className='total'>{(flightDetails.price / 2).toString().includes('.') && (flightDetails.price / 2).toString().split('.')[1].length === 1 ? (flightDetails.price / 2) + '0' : flightDetails.price / 2} SEK</p>
                                </div>
                                <div className="entry">
                                    <p className='item'>Klimatkompensation {compensationMultiplier * 100}%</p>
                                    <p className='quantity'>1</p>
                                    <p className='total'>{finalPrice - flightDetails.price} SEK</p>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="tax">
                                    <p className='title'>TAX RATE</p>
                                    <p>25%</p>
                                </div>
                                <div className="quantity-bottom">
                                    <p className='title'>QTY</p>
                                    <p>{passengerNum * 2 + 1}</p>
                                </div>
                                <div className="subtotal">
                                    <p className='title'>SUBTOTAL</p>
                                    <p>{finalPrice} SEK</p>
                                </div>
                            </div>
                        </section>
                        <StyledFooter>
                            <div className='notes'>
                                <p className="title">NOTES</p>
                                <p>Tack för att du valt att klimatkompensera med GreenJet. Vi önskar dig en trevlig resa.</p>
                                <Link to='/itinerary'>VISA ÖVERSIKT</Link>
                            </div>
                            <div className='company-info'>
                                <p className="title">GreenJet AB.,</p>
                                <p>Stockholmsgatan 1,<br />
                                    Stockholm,<br />
                                    +46 (70) 555555</p>
                            </div>
                        </StyledFooter>
                    </StyledMain>
                </Wrapper>
            }
        </>
    )
}

export default Receipt
