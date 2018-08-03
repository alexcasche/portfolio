import React, { Component } from 'react'
import { Footer } from 'blocks'
import { Img, Link, H3, P, Wrapper } from 'elements'
import logo from 'assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const FooterComponent = () => {
  return (
    <Footer>
      <Wrapper>
        <Img src={logo} />
        <div>
          <Link href="https://github.com/alexcasche" target="_blank">
            <FontAwesomeIcon icon={faGithubSquare} />
          </Link>
          <Link href="https://linkedin.com/in/alexcasche" target="_blank">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Link>
          <Link href="mailto:alexcasche@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
        </div>
      </Wrapper>
    </Footer>
  )
}

export default FooterComponent