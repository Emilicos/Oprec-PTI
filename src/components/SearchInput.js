import React from 'react'
import { StyledInputButton, StyledIcon, StyledInput} from './styles/Header.styled'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchInput = (props) => {
  return (
    <StyledInputButton onSubmit={props.searchBook}> {/* Jadi setiap kali kita klik enter / button maka StyleInputButton yang berupa form akan terpanggil. Lalu saya panggil method built-in onSubmit untuk melakukan  */}
          <StyledInput>
              <StyledIcon position = "absolute">
                <FontAwesomeIcon icon={faSearch} /> 
              </StyledIcon>
                <input type = "text" placeholder='Search' value = {props.search} onChange={props.handleSearch}></input> {/* Value disini sebagai input yang kita masukkan. Lalu fungsi built-in onchange, setiap kali input terganti maka akan ada fungsi handle search terjadi */}
          </StyledInput>
          <button> Search! </button>
    </StyledInputButton>
  )
}

export default SearchInput