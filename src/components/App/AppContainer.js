import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AppComponent from './AppComponent'
import { mySelector } from 'selectors'
import { myAction } from 'actions'

export const AppContainer = props => {
  return <AppComponent {...props} />
}

function mapStateToProps(state) {
  return {
    myState: mySelector(state)
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      myAction: bindActionCreators(myAction, dispatch)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)
