import React from 'react'
import { FlexAround, StyledBook, StyledButton, StyledTemplate} from './styles/Template.styled'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BookView = (props) => {

    var trimmedString

    trimmedString = props.title.substr(0, 21); /* Program akan mentrim title yang ada di data title kita */

    if(props.title == null){ /* Apabila title nya tidak ada */
        trimmedString = "Gak ada judul bos"
    }

    if(props.title.length > trimmedString.length){ /* Apabila jumlah huruf > 21 maka akan ditambahkan ... */
        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))) + " ..."
    }else{ /* Apabila lebih kecil dari 21 maka title nya akan seperti itu*/
        trimmedString = props.title
    }

  return (  
        <StyledTemplate>
            <StyledBook image = {props.image}> {/* Mengambil image dari data thumbnail */}
            </StyledBook>
            <h3> {trimmedString} </h3>
            <p> Published at: {props.publish} </p> {/* Mengambil publish date dari data publishDate */}
            <p> Category: {props.category} </p> {/* Mengambil kategori  dari data category */}
            <FlexAround >
                <StyledButton color = "red"> Description </StyledButton> 
                <button> <FontAwesomeIcon icon={faAdd} className = "icon"/> <p> Wishlist </p> </button>
            </FlexAround>
            
        </StyledTemplate>
  )
}

export default BookView
