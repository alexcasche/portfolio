import React, { Component } from 'react'
// import { PropTypes as t } from 'prop-types'
import { Slice } from 'components'
import { Intro } from 'blocks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faMediumM } from '@fortawesome/free-brands-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { setBoolModifiers } from 'utils/setModifiers'
import logo from 'assets/logo.svg'

class IntroComponent extends Component {
  constructor() {
    super()
    this.state = {
      animated: false
    }
  }
  componentDidMount() {
    setTimeout(() => this.setState({ animated: true}))
  }
  render() {
    const animatedModifier = setBoolModifiers({animated: this.state.animated})
    const options = {
      sliceContentLeft: <Intro.Stripes modifiers={['left', ...animatedModifier]} />,
      sliceContentRight: <Intro.Stripes modifiers={['right', ...animatedModifier]} />,
      transitionDelay: '.5s',
      transitionDuration: '.75s'
    }
    return (
      <Intro>
        <Slice {...options} />
        <Intro.Content modifiers={animatedModifier}>
          <Intro.Logo src={logo} />
          <Intro.Title>
            Alex Asche
          </Intro.Title>
          <Intro.Tagline>
            Designer. Developer. Doglover.
          </Intro.Tagline>
          <div>
            <Intro.Social>
              <FontAwesomeIcon icon={faGithub} />
            </Intro.Social>
            <Intro.Social>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Intro.Social>
            <Intro.Social>
              <FontAwesomeIcon icon={faMediumM} />
            </Intro.Social>
          </div>
        </Intro.Content>
        <Intro.Button modifiers={animatedModifier}>
          <FontAwesomeIcon icon={faChevronDown} />
        </Intro.Button>
      </Intro>
    )
  }
}

// AppComponent.propTypes = {
//   myState: t.object.isRequired,
//   actions: t.shape({
//     myAction: t.func.isRequired
//   }).isRequired,
// }

export default IntroComponent
