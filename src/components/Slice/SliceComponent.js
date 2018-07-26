import React, { Component } from 'react'
import { PropTypes as t } from 'prop-types'
import { Slice } from 'blocks'
import { isAnimated } from './setModifiers'

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
    return (
      <Slice>
        <Slice.Side {...this.props} modifiers={['left', isAnimated(this.state.animated)]}>
          <div>
            {this.props.sliceContentLeft}
          </div>
        </Slice.Side>
        <Slice.Side {...this.props} modifiers={['right', isAnimated(this.state.animated)]}>
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