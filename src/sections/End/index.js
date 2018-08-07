import React from 'react'
import { Wrapper, Icon } from 'elements'
import { Footer } from 'blocks'
import logo from 'assets/logo.svg'
import { faHeart, faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const End = () => {
  return (
    <Footer modifiers={['dark']}>
      <Footer.Stripes />
      <Wrapper>
        <Footer.Logo src={logo}/>
        <div>
          <Footer.Social href="https://github.com/alexcasche">
            <Icon icon={faGithub} />
          </Footer.Social>
          <Footer.Social href="https://linkedin.com/in/alexcasche">
            <Icon icon={faLinkedinIn} />
          </Footer.Social>
          <Footer.Social href="mailto:alexcasche@gmail.com">
            <Icon icon={faEnvelope} />
          </Footer.Social>
        </div>
        <Footer.Text>
          Built with <Icon icon={faHeart} /> + <Icon icon={faCoffee} /> 
        </Footer.Text>
      </Wrapper>
    </Footer>
  )
}

export default End