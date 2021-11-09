const airports = require('../airports.json')
const sweAirports = require('../airports-se.json')

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

export default filterAirports