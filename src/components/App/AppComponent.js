import React, { Component } from 'react'
// import { PropTypes as t } from 'prop-types'
import { App } from 'blocks'
import { Intro } from 'components'

export default class AppComponent extends Component {
  render() {
    return (
      <App className="App">
        <Intro />
      </App>
    )
  }
}

// AppComponent.propTypes = {
//   myState: t.object.isRequired,
//   actions: t.shape({
//     myAction: t.func.isRequired
//   }).isRequired,
// }
