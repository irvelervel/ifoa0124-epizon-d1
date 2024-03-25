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
    default:
      // il default entra in gioco quando i "case" precedenti non vengono attivati
      // il default come tutti i case deve RITORNARE il nuovo stato dell'applicativo
      return state
    // nel caso del default il nuovo stato è UGUALE a quello vecchio! per non fare danni...
    // NON dovete ritornare {}, null, undefined
  }
}

export default mainReducer
