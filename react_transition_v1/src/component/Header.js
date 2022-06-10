import React from 'react'
import { Flex } from './styles/Flex.styled'
import { Container } from './styles/Container.styled'
import { Button } from './styles/Button.styled'
import { StyledHeader, Nav, Logo, Image} from './styles/Header.styled'
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
          <Button>Sign up</Button>
        </Nav>

        <Flex>
          <div>
            <h2>FIND THE LOVE AROUND YOU!</h2>
            
            <p>
              THE BEST PROFESSIONAL PHOTOGRAPHER FOR YOUR ONLINE DATING PROFILE 
            </p> 
            <Button bg = "#ff0099" color="white">
              Get Started For Free
            </Button>
          </div>
          <Image src = './images/img_1.svg'></Image>
        </Flex>  

      </Container>
    </StyledHeader>
  )
}
