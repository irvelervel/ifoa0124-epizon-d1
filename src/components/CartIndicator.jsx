import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

// per LEGGERE qualsiasi proprietà dal Redux Store si deve utilizzare l'hook chiamato useSelector da react-redux
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { userLoginAction } from '../redux/actions'
// useSelector è l'hook "in LETTURA"
// con i componenti a classe si può usare una funzione chiamata mapStateToProps

const CartIndicator = () => {
  // R D H
  // 1) utilizziamo gli hooks solamente nei componenti a funzione
  // 2) utilizziamo gli hooks al di fuori di if/else, loops, funzioni etc.

  const [inputFieldValue, setInputFieldValue] = useState('')

  const dispatch = useDispatch()

  const cartLength = useSelector((state) => {
    return state.cart.content.length
  })

  const userLoggedIn = useSelector((state) => state.user.isLoggedIn) // inizialmente è false

  const userAdmin = useSelector((state) => state.user.isAdmin) // false a meno di chiamarsi "alfio", "marco" o "sara"

  const userName = useSelector((state) => state.user.name)

  const navigate = useNavigate()

  const handleSubmit = function (e) {
    e.preventDefault() // la pagina non si aggiornerà
    // ora invio il valore dell'input, salvato localmente in inputFieldValue verso il Redux Store
    // tramite il dispatch di una action
    dispatch(userLoginAction(inputFieldValue))
  }

  return (
    <div className="d-flex justify-content-end my-4">
      {userLoggedIn ? (
        <div className="d-flex align-items-center">
          <span className="me-1">Benvenuto, {userName}!</span>
          <Button
            onClick={() => navigate('/cart')}
            className="d-flex align-items-center position-relative"
          >
            <FaShoppingCart />
            <span className="ms-2">{cartLength}</span>
            {userAdmin && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                Admin
                <span className="visually-hidden">Utente Admin</span>
              </span>
            )}
          </Button>
        </div>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Control
            type="text"
            required
            placeholder="Esegui il login"
            value={inputFieldValue}
            onChange={(e) => {
              setInputFieldValue(e.target.value)
            }}
          />
        </Form>
      )}
    </div>
  )
}

export default CartIndicator
