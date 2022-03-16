import React from 'react'
import { Flex, Highlight, Seperation, StyledDetails } from './styles/Details.styled'
import { faSearch, faBook, faTableColumns, faGift, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StyledIcon } from './styles/Header.styled'

export default function Details() {
  return (
    <StyledDetails> 
      <h2> Browse </h2>
        <Seperation>
          <Flex>
            <StyledIcon position = "static">
              <FontAwesomeIcon icon={faSearch} />
            </StyledIcon>
            <ul> Top Books </ul>
          </Flex>
          <Flex>
            <StyledIcon position = "static">
              <FontAwesomeIcon icon={faBook} />
            </StyledIcon>
            <Highlight>
              <ul> Discover </ul>
            </Highlight>
          </Flex>
          <Flex>
            <StyledIcon position = "static">
              <FontAwesomeIcon icon={faTableColumns} />
            </StyledIcon>
            <ul> Categories </ul>
          </Flex>
        </Seperation>

      <h2> Your Books </h2>
        <Seperation>
          <Flex>
            <StyledIcon position = "static" color = "red">
              <FontAwesomeIcon icon={faGift} />
            </StyledIcon>
            <ul> Wishlist </ul>
          </Flex>

          <Flex>
            <StyledIcon position = "static" color = "red">
              <FontAwesomeIcon icon={faHeart} />
            </StyledIcon>
            <ul> Subscribe </ul>
          </Flex>

        </Seperation>


    </StyledDetails>
  )
}
