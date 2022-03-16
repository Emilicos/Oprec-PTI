import React, { useState, useEffect } from 'react'
import request from 'superagent'
import SearchInput from './SearchInput';
import List from './List';

const BOOKS_API = "https://www.googleapis.com/books/v1/volumes?q="

function Books() {
    const [books, setBooks] = useState([]) /* Menginisialisasikan state untuk data buku */
    const [search, setSearch] = useState("") /* Menginisialisasikan state untuk search field */

    /* Program ini akan handle apabila ada kekurangan data yang ingin di masukkan ke array kita (books) */
    const cleanData = (data) => {
        const cleanedData = data.body.items.map((book) => {
          if(book.volumeInfo.hasOwnProperty('publishedDate') === false){ /* Apabila tidak ada */
            book.volumeInfo['publishedDate'] = "2000" /* Maka tambahkan */
          }
          
          if(book.volumeInfo.hasOwnProperty("imageLinks") === false){ /* Apabila tidak ada */
            book.volumeInfo['imageLinks'] = { thumbnail: "https://thumbs.dreamstime.com/b/not-found-icon-design-line-style-perfect-application-web-logo-presentation-template-not-found-icon-design-line-style-169941512.jpg"} /* Maka tambahkan */
          } 
    
          if(book.volumeInfo.hasOwnProperty("categories") === false){ /* Apabila tidak ada */
            book.volumeInfo['categories'] = "Novel" /* Maka tambahkan */
          }
    
          if(book.volumeInfo.hasOwnProperty("title") === false){ /* Apabila tidak ada */
            book.volumeInfo['title'] = "Tidak ada judul :(" /* Maka tambahkan */
          }
          return book /* return kembali hasil book per key element */
        })
        return cleanedData
    }

    const getBooks = (API) =>{ /* Fungsi ini untuk fetch API dengan argumen API sebagai link */
        request /* Menggunakan library superagent untuk request */
        .get(API+search+"&maxResults=40" ) // Merequst dari google API
        .then((data) => { /* Apabila sudah dapat datanya maka */
            // console.log(data)
            const cleanedData = cleanData(data) /* Lakukan clean data/pembenaran data */
            // console.log(cleanData)
             // Spread operator (mengambil data dari array items dan spread semuanya kedalam array books)
            setBooks(cleanedData) /* Menggunakan state dari useState yang kita inisialisasikan diatas untuk memperbersih data */
        })
    }

    useEffect(() => {
        getBooks(BOOKS_API + "Baccano") /* Apabila pertama kali kita merender website kita maka akan manually mengambil API dari goole API dengan search field berisi "Baccano" */
    }, [])
    
    const searchBook = (e) => { /* Fungsi ini terpanggil setelah kita mendapatkan data dari handleSearch function, lalu akan apabila data dari handleSearch functions berisi string kosong atau bukan. Akan terpanggil apabila kita klik enter/submit */
        e.preventDefault(); // Mengehntikan request ke server 
        if(search){ /* Apabila search fieldnya tidak kosong */
            getBooks(BOOKS_API)
            setSearch('') /* Setiap kali terpanggil fungsi ini maka input field dikosongkan */
        } /* Apabila search field kosong maka tidak diambil API apa-apa */
      }

    const handleSearch = (e) => { // Menghandle search input yang kita masukkin (Event)
        setSearch(e.target.value) // Setiap kali kita memasukkan kata ke input box, kita ingin dapetin value yang kita masukin
    } /* Mengubah variabel Search dengan nilai input yang kita ambil, akan terpanggil setiap kali kita mengganti value */

    return (
        <>
            <h2> Books for you  </h2>
            <SearchInput searchBook = {searchBook} search = {search} handleSearch = {handleSearch}/> {/* Untuk passing props */}
            <List books = {books}/> {/* Untuk passing props berupa data yang berupa array*/}
        </>
  )
}

export default Books