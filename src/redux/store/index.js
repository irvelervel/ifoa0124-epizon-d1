import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from '../reducers/userReducer'
import cartReducer from '../reducers/cartReducer'

// configureStore è la funzione principale di redux, quella che GENERA lo stato condiviso

// poichè la proprietà "reducer" accetta UN SOLO reducer per creare lo store,
// ho bisogno di ri-costruire la torta!

const unifiedReducer = combineReducers({
  user: userReducer, // ricostruisce la fetta user
  cart: cartReducer, // ricostruisce la fetta cart
})

const store = configureStore({
  reducer: unifiedReducer, // questo reducer risultante è la "somma" di tutte le slices
})

export default store
