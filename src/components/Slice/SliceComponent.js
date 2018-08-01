import React, { Component } from 'react'
import { PropTypes as t } from 'prop-types'
import { Slice } from 'blocks'
import { setBoolModifiers } from 'utils/setModifiers'

export default class SliceComponent extends Component {
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
    return (
      <Slice>
        <Slice.Side {...this.props} modifiers={['left', ...animatedModifier]}>
          <div>
            {this.props.sliceContentLeft}
          </div>
        </Slice.Side>
        <Slice.Side {...this.props} modifiers={['right', ...animatedModifier]}>
          <div>
            {this.props.sliceContentRight}
          </div>
        </Slice.Side>
      </Slice>
    )
  }
}

SliceComponent.propTypes = {
  transitionDuration: t.oneOfType([ t.number, t.string]).isRequired,
  transitionTiming: t.string.isRequired,
  transitionDelay: t.oneOfType([ t.number, t.string]).isRequired,
  sliceContentLeft: t.node,
  sliceContentRight: t.node
}


SliceComponent.defaultProps = {
  transitionDuration: '.5s',
  transitionTiming: 'ease-in-out',
  transitionDelay: '.25s'
}