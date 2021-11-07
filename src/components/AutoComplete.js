import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 7.5px 0;

    input {
        box-sizing: border-box;
        width: 100%;
        background-color: #128DA1;
        padding: 10px;
        color: white;
        font-size: 18px;
        border: none;

        ::placeholder {
            color: white;
        }

        :focus {
            outline: none;
        }
    }

    datalist {
        box-sizing: border-box;
        position: relative;
        height: 0;
        margin: 0;

        div {
            overflow-y: auto;
            max-height: 256px;
        }

        option {
            padding: 10px;
            background-color: whitesmoke;
            border-bottom: solid 1px #00000040;
            color: #595959;

            :hover {
                cursor: pointer;
            }
        }
    }

    .show-list {
        display: block;
    }
`

const airports = require('../airports.json')
const sweAirports = require('../airports-se.json')

function useOutsideAlerter(ref, onOutsideClick) {
    useEffect(() => {
        // sets showDept/showDest to false on click outside
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                onOutsideClick(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

const AutoComplete = ({ name, inputTrip, setInputTrip, trip, setTrip }) => {

    const [showDeptList, setShowDeptList] = useState('')
    const [showDestList, setShowDestList] = useState('')

    const deptRef = useRef()
    const destRef = useRef()
    useOutsideAlerter(deptRef, setShowDeptList)
    useOutsideAlerter(destRef, setShowDestList)

    const filterAirports = (str) => {
        const query = str.toLocaleLowerCase()

        return airports.filter(item => {
            return (
                item.city.toLocaleLowerCase().startsWith(query) ||
                item.country.toLocaleLowerCase().startsWith(query) ||
                item.name.toLocaleLowerCase().startsWith(query) ||
                item.iata_code.toLocaleLowerCase().startsWith(query) ||

                sweAirports[airports.indexOf(item)].city.toLocaleLowerCase().startsWith(query) ||
                sweAirports[airports.indexOf(item)].country.toLocaleLowerCase().startsWith(query) ||
                item.name.toLocaleLowerCase().startsWith(query)
            )
        })
    }

    const renderAirports = (input, key, styleState) => {
        return filterAirports(input).map(item => {
            return input.length < 3 ? null : (
                <option key={item.iata_code} value={item.name} onClick={() => {
                    setInputTrip({ ...inputTrip, [key]: `${item.name}, ${sweAirports[airports.indexOf(item)].city} - ${item.iata_code}` })
                    setTrip({ ...trip, [key]: `${item.name}, ${sweAirports[airports.indexOf(item)].city} - ${item.iata_code}` })
                    styleState(false)
                }}>{item.name}, {sweAirports[airports.indexOf(item)].city} - {item.iata_code}</option>
            )
        })
    }

    return name === 'dept' ? (
        <Wrapper ref={deptRef}>
            <input
                type="text"
                placeholder="Från?"
                value={inputTrip.dept}
                onClick={() => setShowDeptList(true)}
                onInput={e => {
                    setInputTrip({ ...inputTrip, dept: e.target.value })
                    setTrip({ ...trip, dept: '' })
                }} />
            <datalist className={showDeptList ? 'show-list' : null}>
                <div>
                    {renderAirports(inputTrip.dept, name, setShowDeptList)}
                </div>
            </datalist>
        </Wrapper>
    ) : (
        <Wrapper ref={destRef}>
            <input
                type="text"
                placeholder="Från?"
                value={inputTrip.dest}
                onClick={() => setShowDestList(true)}
                onInput={e => {
                    setInputTrip({ ...inputTrip, dest: e.target.value })
                    setTrip({ ...trip, dest: '' })
                }} />
            <datalist className={showDestList ? 'show-list' : null}>
                <div>
                    {renderAirports(inputTrip.dest, name, setShowDestList)}
                </div>
            </datalist>
        </Wrapper>
    )
}

export default AutoComplete
