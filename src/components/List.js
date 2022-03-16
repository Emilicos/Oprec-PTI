import React from 'react'
import BookView from './BookView'

const List = (props) => {
  return (
    <>
        {
            props.books.map((book, i) => { // Looping per data/keys yang ada.
                return <BookView key = {i} image = {book.volumeInfo.imageLinks.thumbnail} title = {book.volumeInfo.title} publish = {book.volumeInfo.publishedDate} category = {book.volumeInfo.categories}/> // Kita akan loop/map pada book tersebut dan output setiap objek yang ada dalam books array 
            })
        }
    </>
  )
}

export default List