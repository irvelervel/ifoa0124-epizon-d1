import { ADD_TO_CART, DELETE_FROM_CART } from '../actions'

const initialState = {
  // è necessario pensare e costruire lo STATO INIZIALE per Redux
  // lo stato iniziale, come quello di un componente React, dovrà già ospitare tutte le proprietà
  // con cui vogliamo interagire

  // noi vogliamo salvare il contenuto del carrello
  // immaginate di suddividere il vostro Redux Store in "sotto-oggetti"
  cart: {
    // cart è un sotto-oggetto di Redux, che ospiterà TUTTE le informazioni relative al carrello
    content: [], // content rappresenterà letteralmente il "contenuto" del nostro carrello
  },
  user: {
    name: '',
    isLoggedIn: false,
    isAdmin: false,
  },
}

// state rappresenta lo stato corrente, action rappresenta l'azione appena "dispatchata"
const mainReducer = function (state = initialState, action) {
  // "state" al primo avvio dell'app sarà undefined, perchè l'applicativo si è appena caricato
  // nel caso state sia undefined, gli diamo come valore di default "initialState"
  // il reducer è il CUORE di Redux
  // si tratta di una funzione PURA, ovvero di una funzione che non muta MAI i propri parametri,
  // NON effettua nessun'operazione verso l'esterno (es. fetch) e che fornita dello stesso INPUT
  // restituisce sempre lo stesso OUTPUT

  switch (action.type) {
    // ora che abbiamo cominciato a "dispatchare" le azioni, è necessario ISTRUIRE il nostro reducer
    // sul cosa fare quando le intercetta!

    case ADD_TO_CART:
      return {
        // OGNI case del reducer deve ritornare un oggetto -> IL NUOVO STATO DELL'APPLICATIVO
        ...state, // ricopiamo dentro TUTTE le coppie chiave/valore di state, per evitare di perdere altre proprietà
        // al di fuori di cart
        cart: {
          ...state.cart, // di nuovo riparto dal cart di prima, per evitare di perdere altre potenziali proprietà
          // di questo sotto-oggetto...
          content: state.cart.content.concat(action.payload),
          //   content: [...state.cart.content, action.payload]
        },
      }

    case DELETE_FROM_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          content: state.cart.content.filter((book, i) => i !== action.payload),
        },
      }

    default:
      // il default entra in gioco quando i "case" precedenti non vengono attivati
      // il default come tutti i case deve RITORNARE il nuovo stato dell'applicativo
      return state
    // nel caso del default il nuovo stato è UGUALE a quello vecchio! per non fare danni...
    // NON dovete ritornare {}, null, undefined
  }
}

export default mainReducer
