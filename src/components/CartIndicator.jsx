import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

// per LEGGERE qualsiasi proprietà dal Redux Store si deve utilizzare l'hook chiamato useSelector da react-redux
import { useSelector } from 'react-redux'
// useSelector è l'hook "in LETTURA"
// con i componenti a classe si può usare una funzione chiamata mapStateToProps

const CartIndicator = () => {
  // R D H
  // 1) utilizziamo gli hooks solamente nei componenti a funzione
  // 2) utilizziamo gli hooks al di fuori di if/else, loops, funzioni etc.

  const cartLength = useSelector((state) => {
    return state.cart.content.length
  })

  const navigate = useNavigate()

  return (
    <div className="d-flex justify-content-end my-4">
      <Button
        onClick={() => navigate('/cart')}
        className="d-flex align-items-center"
      >
        <FaShoppingCart />
        <span className="ms-2">{cartLength}</span>
      </Button>
    </div>
  )
}

export default CartIndicator
