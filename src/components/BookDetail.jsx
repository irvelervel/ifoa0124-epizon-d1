import { Col, Row, Button } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { addToCartAction } from '../redux/actions'

const BookDetail = ({ bookSelected }) => {
  const dispatch = useDispatch()
  const userLoggedIn = useSelector((state) => {
    return state.user.isLoggedIn
  })

  return (
    <div className="mt-3 mb-4 mb-lg-0">
      {bookSelected ? (
        <>
          <Row>
            <Col sm={12}>
              <h1>{bookSelected.title}</h1>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm={4}>
              <div className="mt-3">
                <img
                  className="book-cover"
                  src={bookSelected.imageUrl}
                  alt="book selected"
                />
              </div>
            </Col>
            <Col sm={8}>
              <p>
                <span className="fw-bold">Description:</span>&nbsp;
                {bookSelected.description}
              </p>
              <p>
                <span className="fw-bold">Price:</span>&nbsp;
                {bookSelected.price}$
              </p>
              <Button
                className="d-flex align-items-center"
                disabled={!userLoggedIn}
                onClick={() => {
                  // qui dentro dobbiamo inserire la logica necessaria per aggiungere bookSelected
                  // all'array content dentro cart
                  // non possiamo solamente aggiungere un libro all'array, noi dobbiamo creare un NUOVO
                  // stato dell'applicativo in cui quell'array non è più vuoto...!
                  // -> dobbiamo "DISPATCHARE" un'action
                  dispatch(addToCartAction(bookSelected))
                  // invece che "dispatchare" l'oggetto dell'azione, dispatchiamo l'ACTION CREATOR,
                  // ovvero una funzione che RITORNA la action (dobbiamo fornire all'action creator
                  // il bookSelected, che diventerà il payload. Vedi redux/actions/index.js )
                }}
              >
                <span className="me-2">AGGIUNGI AL</span>
                <FaShoppingCart />
              </Button>
              {!userLoggedIn && (
                <p className="text-sm">
                  Esegui il login per acquistare questo libro
                </p>
              )}
            </Col>
          </Row>
        </>
      ) : (
        <Row>
          <Col sm={12}>
            <h3>Clicca su un libro per i dettagli</h3>
          </Col>
        </Row>
      )}
    </div>
  )
}

export default BookDetail
