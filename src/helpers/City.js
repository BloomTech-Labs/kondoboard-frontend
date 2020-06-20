import { locations } from './Locations.js';

class City {
  static checkAgainstLocationsObject(state) {
    const cityObject = locations.filter(location => {
      return (location.state === state);
    });
    const cities = cityObject.map(location => {
      return location.city;
    });
        
    return cities;
  }
        
}

export default City;
