import { StyledHeader, StyledOptions } from './styles/Header.styled'
import { React, Component} from 'react'
import { faHome, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends Component{

  render(){ 
    return (
      <StyledHeader>
          <h1> Library </h1>
          <StyledOptions>
              <p>
                <FontAwesomeIcon icon={faUserFriends} className = "icon"/> Friends
              </p>
              <p>
                <FontAwesomeIcon icon={faHome} className = "icon"/> Home
              </p>
          </StyledOptions>
      </StyledHeader>
    )
  }
}

export default Header;