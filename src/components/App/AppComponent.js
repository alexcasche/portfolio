import React, { Component } from 'react'
import { App } from 'blocks'
import { PropTypes as t } from 'prop-types'

export default class AppComponent extends Component {
  render() {
    return (
      <App className="App">
        My App
      </App>
    )
  }
}

AppComponent.propTypes = {
  myState: t.object.isRequired,
  actions: t.shape({
    myAction: t.func.isRequired
  }).isRequired,
}
