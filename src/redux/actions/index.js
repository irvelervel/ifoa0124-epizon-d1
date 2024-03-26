export const ADD_TO_CART = 'ADD_TO_CART'
export const DELETE_FROM_CART = 'DELETE_FROM_CART'
export const USER_LOGIN = 'USER_LOGIN'

// ora rimpiazziamo le actions sparse per i vari componenti con degli ACTION CREATORS
// un ACTION CREATOR è una FUNZIONE che RITORNA L'AZIONE. Così scriviamo la action una volta sola!
export const addToCartAction = (bookSelected) => {
  return {
    type: ADD_TO_CART,
    payload: bookSelected,
  }
}

// non siamo obbligati ad utilizzare le funzioni freccia
export const deleteFromCartAction = function (i) {
  return {
    type: DELETE_FROM_CART,
    payload: i,
  }
}

export const userLoginAction = (inputFieldValue) => {
  return {
    type: USER_LOGIN,
    payload: inputFieldValue,
  }
}
