import React, { Component } from 'react'
import { Strip } from 'blocks'
import { H1, P } from 'elements'

class BioComponent extends Component {
  render() {
    return (
      <Strip modifiers={['light']}>
        <Strip.Decorators modifiers={['light']} />
        <Strip.Content>
          <H1>Hi I'm Alex. Thanks for stopping by.</H1>
          <P style={{ marginBottom: '220px'}}>
            Lorem ipsum text...
          </P>
        </Strip.Content>
      </Strip>
    )
  }
}

// AppComponent.propTypes = {
//   myState: t.object.isRequired,
//   actions: t.shape({
//     myAction: t.func.isRequired
//   }).isRequired,
// }

export default BioComponent
