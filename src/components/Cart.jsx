import { Col, Row, Button } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'

const Cart = () => {
  // qui dentro ci vanno gli hooks!
  const booksCart = useSelector((state) => {
    return state.cart.content // abbiamo recuperato dallo state di Redux l'array dei libri nel carrello
  })
  // booksCart è l'array dei libri salvati nel carrello, memorizzati in Redux in { cart: { content: [] } }

  // mi genero la funzione dispatch()
  const dispatch = useDispatch()

  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: 'none' }}>
          {booksCart.map((book, i) => (
            <li key={i} className="my-4">
              <Button
                variant="danger"
                onClick={() => {
                  // da qui dentro dovremmo eliminare il libro selezionato dal carrello!
                  dispatch({
                    type: 'DELETE_FROM_CART',
                    payload: i,
                  })
                }}
              >
                <FaTrash />
              </Button>
              <img
                className="book-cover-small"
                src={book.imageUrl}
                alt="book selected"
              />
              {book.title}
            </li>
          ))}
        </ul>
      </Col>
      <Row>
        <Col sm={12} className="fw-bold mb-3 ms-4">
          TOTALE:{' '}
          {booksCart.reduce(
            (acc, currentValue) => acc + parseFloat(currentValue.price),
            0
          )}
          $
        </Col>
      </Row>
    </Row>
  )
}

export default Cart
