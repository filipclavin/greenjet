import React, { useEffect, useState } from 'react'
import { useContext } from 'react/cjs/react.development'
import { Context } from '../Context'

const OfferList = () => {

    const [flights, setFlights] = useState()
    const [simpleFlights, setSimpleFlights] = useState()
    const [airlinesOut, setAirlinesOut] = useState()
    const [airlinesBack, setAirlinesBack] = useState()

    const { trip, startDate, endDate, passengerNum, accessToken } = useContext(Context)

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
                                return segment.arrival.iataCode
                            }
                        }).filter(stop => stop),
                        stopsBack: item.itineraries[1].segments.map(segment => {
                            if (segment.arrival.iataCode !== trip.dept.iata) {
                                return segment.arrival.iataCode
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
            {simpleFlights && simpleFlights.map(item => {

                return (
                    <div key={item.id} className='offer'>
                        <div className='outgoing'>
                            <div className='info'>
                                <div className='left-side'>
                                    <p className='iatas'>{trip.dept.iata} -{item.stopsOut[0] && item.stopsOut.map(stop => ` ${stop} -`)} {trip.dest.iata}</p>
                                </div>
                                <div className='right-side'>
                                    <p>{item.depTimeOut} - {item.arrTimeOut} ({item.flightTimeOut})</p>
                                    <p>{item.stopsOut ? `${item.stopsOut.length} stopp (${item.stopsOut.map(stop => stop)})` : 'Inga stopp'}</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='returning'>
                            <div className='info'>
                                <div className='left-side'>
                                    <p className='iatas'>{trip.dest.iata} -{item.stopsBack[0] && item.stopsBack.map(stop => ` ${stop} -`)} {trip.dept.iata}</p>
                                </div>
                                <div className='right-side'>
                                    <p>{item.depTimeBack} - {item.arrTimeBack} ({item.flightTimeBack})</p>
                                    <p>{item.stopsBack ? `${item.stopsBack.length} stopp (${item.stopsBack.map(stop => stop)})` : 'Inga stopp'}</p>
                                </div>
                            </div>
                        </div>
                        <p className='price'>{item.price} :-</p>
                    </div>
                )
            })}
        </div>
    )
}

export default OfferList
