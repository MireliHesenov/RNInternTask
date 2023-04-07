import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCountryData = createAsyncThunk(
    'country/fetchCountryData',
    async () => {
      const namesResponse = await fetch('http://country.io/names.json');
      const namesData = await namesResponse.json();
      const phoneResponse = await fetch('http://country.io/phone.json');
      const phoneData = await phoneResponse.json();
      const countryData = Object.keys(phoneData).map(key => {
        return {
          "countrycode": phoneData[key],
          "name": namesData[key],
          "phoneLength": Math.floor(Math.random() * 5) + 6 // random integer between 6 and 10 
        };
      }).sort((a, b) => a.name.localeCompare(b.name));
      return { countries : countryData};
    }
  );

  const countryReducer = createSlice({
    name: 'country',
    initialState: { countries: null, currentCountry: null},
    reducers: {
      setCurrentCountry: (state, action) => {
        state.currentCountry = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchCountryData.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchCountryData.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.countries = action.payload.countries
          state.currentCountry = action.payload.countries[0]
        })
        .addCase(fetchCountryData.rejected, (state) => {
          state.status = 'failed';
        });
    },
  });


  export const {setCurrentCountry} = countryReducer.actions;
export default countryReducer.reducer;

