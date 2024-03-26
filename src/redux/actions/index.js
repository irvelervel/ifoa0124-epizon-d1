export const ADD_TO_CART = 'ADD_TO_CART'
export const DELETE_FROM_CART = 'DELETE_FROM_CART'
export const USER_LOGIN = 'USER_LOGIN'
export const GET_BOOKS = 'GET_BOOKS'

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

// andiamo a creare un action creator che non si occuperà solamente di ritornare un'azione,
// ma che gestirà interamente la logica delle operazioni asincrone nel flow di Redux
export const getBooksAction = () => {
  // qui dentro devo occuparmi di fare la fetch, recuperare i dati dal JSON della risposta
  // e salvare l'array di libri nel Redux Store
  // però i nostri action creators fin'adesso erano abbastanza "stupidi"... erano delle funzioni
  // che ritornavano degli oggetti (delle actions)
  // creiamo ora un SUPER action creator!
  return (dispatch, getState) => {
    // gli action creator possono ANCHE ritornare intere funzioni!
    // qui dentro posso gestire l'intera logica della mia operazione asincrona, e dispatchare
    // il risultato finale!
    // se Redux si accorge che sta dispatchando una funzione, la "arricchirà" di due parametri
    // 1) la funzione dispatch, che alla fine dell'operazione asincrona manderà i risultati al reducer
    // 2) getState, una funzione che se eseguita ci ritorna l'intero oggetto di stato di Redux

    fetch('https://striveschool-api.herokuapp.com/food-books')
      .then((resp) => {
        if (resp.ok) {
          return resp.json()
        } else {
          throw new Error('Errore nel recupero libri')
        }
      })
      .then((fetchedBooks) => {
        console.log(
          'GETSTATE, SECONDO PARAMETRO DELLA FUNZIONE ASINCRONA',
          getState()
        )
        //   setBooks(fetchedBooks) // non setto più uno stato locale!
        // ma dispatcho un'azione trasportando i libri ottenuti
        dispatch({
          type: GET_BOOKS,
          payload: fetchedBooks, // l'array dei libri ottenuti
          // questo per invocare il reducer senza incertezze, in modo da svincolarlo da possibilità di fallimento!
        })
      })
      .catch((error) => {
        console.log('ERRORE', error)
      })
  }
}
