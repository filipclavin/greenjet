import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { Context } from '../Context'
import { ReactComponent as Loading } from '../resources/loading.svg'

const OfferList = () => {

    const [flights, setFlights] = useState()
    const [simpleFlights, setSimpleFlights] = useState()

    const {
        trip,
        startDate,
        endDate,
        passengerNum,
        accessToken,
        setFlightDetails
    } = useContext(Context)

    const navigate = useNavigate()

    const formatTime = (time) => {
        return time.slice(11, 16)
    }

    const getAirlines = async (codes) => {

        function titleCase(str) {
            var splitStr = str.toLowerCase().split(' ');
            for (var i = 0; i < splitStr.length; i++) {
                // You do not need to check if i is larger than splitStr length, as your for does that for you
                // Assign it back to the array
                splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
            }
            // Directly return the joined string
            return splitStr.join(' ');
        }

        return await fetch(`https://test.api.amadeus.com/v1/reference-data/airlines?airlineCodes=${codes.join(',')}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(res => res.json())
            .then(data => {
                return data.data.map(item => {
                    return titleCase(item.businessName)
                })
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetch(`https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${trip.dept.iata}&destinationLocationCode=${trip.dest.iata}&departureDate=${startDate}&returnDate=${endDate}&adults=${passengerNum}&currencyCode=SEK&max=10`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(res => res.json())
            .then(data => {
                setFlights(data.data)
                setSimpleFlights(data.data.map(item => {
                    return {
                        id: item.id,
                        airlinesOut: item.itineraries[0].segments.map(segment => {
                            return segment.carrierCode
                        }),
                        airlinesBack: item.itineraries[1].segments.map(segment => {
                            return segment.carrierCode
                        }),
                        stopsOut: item.itineraries[0].segments.map(segment => {
                            if (segment.arrival.iataCode !== trip.dest.iata) {
                                return {
                                    ...segment.arrival,
                                    at: formatTime(segment.arrival.at)
                                }
                            }
                        }).filter(stop => stop),
                        stopsBack: item.itineraries[1].segments.map(segment => {
                            if (segment.arrival.iataCode !== trip.dept.iata) {
                                return {
                                    ...segment.arrival,
                                    at: formatTime(segment.arrival.at)
                                }
                            }
                        }).filter(stop => stop),
                        depTimeOut: formatTime(item.itineraries[0].segments[0].departure.at),
                        arrTimeOut: formatTime(item.itineraries[0].segments.at(-1).arrival.at),
                        depTimeBack: formatTime(item.itineraries[1].segments[0].departure.at),
                        arrTimeBack: formatTime(item.itineraries[1].segments.at(-1).arrival.at),
                        flightTimeOut: item.itineraries[0].duration.split('T')[1],
                        flightTimeBack: item.itineraries[1].duration.split('T')[1],
                        price: item.price.total.split('.')[0]
                    }
                })
                )
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        console.log(flights)
        console.log(simpleFlights);
    }, [flights, simpleFlights])

    return (
        <div className='offer-list'>
            {simpleFlights ? simpleFlights.map(item => {

                return (
                    <div key={item.id} className='offer' onClick={() => {
                        setFlightDetails({
                            airlines: getAirlines([...item.airlinesOut, ...item.airlinesBack]),
                            depTimeOut: item.depTimeOut,
                            arrTimeOut: item.arrTimeOut,
                            depTimeBack: item.depTimeBack,
                            arrTimeBack: item.arrTimeBack,
                            stopsOut: item.stopsOut,
                            stopsBack: item.stopsBack,
                            price: parseInt(item.price)
                        })
                        navigate('/details')
                    }}>
                        {/* limited by API, so could not get insert airlines for each result */}
                        <div className='info'>
                            <div className='outgoing'>
                                <div className='left-side'>
                                    <p className='iatas'>{trip.dept.iata} -{item.stopsOut[0] && item.stopsOut.map(stop => ` ${stop.iataCode} -`)} {trip.dest.iata}</p>
                                </div>
                                <div className='right-side'>
                                    <p>{item.depTimeOut} - {item.arrTimeOut} ({item.flightTimeOut})</p>
                                    <p>{item.stopsOut[0] ? `${item.stopsOut.length} stopp (${item.stopsOut.map(stop => stop.iataCode).join(', ')})` : 'Inga stopp'}</p>
                                </div>
                            </div>
                            <hr />
                            <div className='returning'>
                                <div className='left-side'>
                                    <p className='iatas'>{trip.dest.iata} -{item.stopsBack[0] && item.stopsBack.map(stop => ` ${stop.iataCode} -`)} {trip.dept.iata}</p>
                                </div>
                                <div className='right-side'>
                                    <p>{item.depTimeBack} - {item.arrTimeBack} ({item.flightTimeBack})</p>
                                    <p>{item.stopsBack[0] ? `${item.stopsBack.length} stopp (${item.stopsBack.map(stop => stop.iataCode).join(', ')})` : 'Inga stopp'}</p>
                                </div>
                            </div>
                        </div>
                        <p className='price'>{item.price} :-</p>
                    </div>
                )
            })
                :
                <Loading />
            }
        </div>
    )
}

export default OfferList
