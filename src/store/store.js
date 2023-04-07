import { configureStore } from '@reduxjs/toolkit'

import countryReducer from './countryReducer'

export const store = configureStore({ reducer: {
    country: countryReducer
}})

