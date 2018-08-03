import React, { Component } from 'react'
import { Cover } from 'blocks'
import { Icon } from 'elements'
import logo from 'assets/logo.svg'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faChevronDown, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default class Intro extends Component {
  constructor() {
    super()
    this.state = {
      animated: null
    }
  }
  componentDidMount() {
    setTimeout(() => this.setState({ animated: 'animated' }))
  }
  scrollTo = () => {
    window.scroll({top: window.innerHeight, left: 0, behavior: 'smooth' });
  }
  render() {
    return (
      <Cover modifiers={['dark', this.state.animated]}>
        <Cover.Slice modifiers={['left', this.state.animated]} />
        <Cover.Slice modifiers={['right', this.state.animated]} />
        <Cover.Stripes modifiers={['left', this.state.animated]} />
        <Cover.Stripes modifiers={['right', this.state.animated]} />
        <Cover.Content modifiers={[this.state.animated]}>
          <Cover.Logo src={logo} />
          <Cover.Title>Alex Asche</Cover.Title>
          <Cover.Text>Designer. Developer. Doglover.<br/>
            <Cover.Social href="https://github.com/alexcasche" target="_blank">
              <Icon icon={faGithub} />
            </Cover.Social>
            <Cover.Social href="https://linkedin.com/in/alexcasche" target="_blank">
              <Icon icon={faLinkedinIn} />
            </Cover.Social>
            <Cover.Social href="mailto:alexcasche@gmail.com">
              <Icon icon={faEnvelope} />
            </Cover.Social>
          </Cover.Text>
        </Cover.Content>
        <Cover.Scroll onClick={this.scrollTo} modifiers={['circle', this.state.animated]}>
          <Icon icon={faChevronDown} />
        </Cover.Scroll>
      </Cover>
    )
  }
}
