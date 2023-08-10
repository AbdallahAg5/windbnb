import data from '@/data/data.json';

export const SearchAirbnb = (state, { payload }) => {
  let arr = [];
  let arr2 = [];
  let { location, guest } = payload;
  for (let i = 0; i < data.length; i++) {
    if (location === '' || guest === '') {
      state.locationFound = [];
      state.guestFound = [];
    } else if (
      (guest !== '' &&
        data[i].city.toLowerCase().includes(location.toLowerCase())) ||
      data[i].country.toLowerCase().includes(location.toLowerCase())
    ) {
      arr.push(data[i].city + ' ' + data[i].country);
      for (let i = 0; i < data.length; i++) {
        if (parseInt(guest) < data[i].maxGuests) {
          arr.push(data[i].city + ' ' + data[i].country);
        }
      }

      arr.concat(arr2);
    } else if (
      data[i].city.toLowerCase().includes(location.toLowerCase()) ||
      data[i].country.toLowerCase().includes(location.toLowerCase())
    ) {
      arr.push(data[i].city + ' ' + data[i].country);
    }
  }

  state.locationFound = [...new Set(arr)];
};

export const DataSearched = (state, { payload }) => {
  let arr = [];
  let { location } = payload;
  for (let i = 0; i < data.length; i++) {
    if (data[i].city.toLowerCase().includes(location.toLowerCase())) {
      arr.push(data[i]);
    }
  }

  state.dataSearched = [...new Set(arr)];
};
