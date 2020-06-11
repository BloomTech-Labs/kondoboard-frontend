import { locations } from './Locations.js';

class City {
    static checkAgainstLocationsObject(state) {
        console.log('state is', state)
        const cityObject = locations.filter(location => {
            return (location.state === state)
        })
        const cities = cityObject.map(city => {
            return city.city
        })
        
        console.log('cities are', cities)
        return cities;
    }
        
}

export default City;