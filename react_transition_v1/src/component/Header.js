import React from 'react'
import { Flex } from './styles/Flex.styled'
import { Container } from './styles/Container.styled'
import { Button } from './styles/Button.styled'
import { StyledHeader, Nav, Logo} from './styles/Header.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocketchat } from '@fortawesome/free-brands-svg-icons'


export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo>
            <FontAwesomeIcon icon={faRocketchat} />
            VTalk
          </Logo> 
          <Button>Try it free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Find the person around you!</h1>
            

          </div>
          <Button bg = '#ff0099' color='#fff'>
            Get Started For Free
          </Button>

        </Flex>
      </Container>
    </StyledHeader>
  )
}
