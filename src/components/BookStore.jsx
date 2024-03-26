import { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import BookList from './BookList'
import BookDetail from './BookDetail'
import { useDispatch, useSelector } from 'react-redux'
import { getBooksAction } from '../redux/actions'

const BookStore = () => {
  const [bookSelected, setBookSelected] = useState(null)
  const dispatch = useDispatch()

  const books = useSelector((state) => state.book.available) // l'array di libri nel Redux Store

  useEffect(() => {
    dispatch(getBooksAction()) // dispatcho da BookStore getBooksAction(), l'action creator
    // con i superpoteri che ritornava una funzione asincrona (e che si occupa di riempire il Redux Store)
  }, [])

  const changeBook = (book) => setBookSelected(book)

  return (
    <Row className="center-row">
      <Col lg={4}>
        <BookList
          bookSelected={bookSelected}
          changeBook={changeBook}
          books={books}
        />
      </Col>
      <Col lg={8}>
        <BookDetail bookSelected={bookSelected} />
      </Col>
    </Row>
  )
}

export default BookStore
