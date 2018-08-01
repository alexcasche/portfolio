import React, { Component } from 'react'
import { Strip, Grid } from 'blocks'
import { H2, H3, P } from 'elements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintBrush, faCode } from '@fortawesome/free-solid-svg-icons'

class SkillsComponent extends Component {
  render() {
    return (
      <Strip modifiers={['dark']}>
        <Strip.Decorators modifiers={['dark']} />
        <Strip.Content>
          <Grid style={{ marginTop: '-280px'}}>
            <Grid.Box>
              <Grid.Header>
                <FontAwesomeIcon icon={faPaintBrush} />
              </Grid.Header>
              <Grid.Content modifiers={['left']}>
                <H2>Designer</H2>
                <P>UI/UX Designer focussed on creating clean interfaces, and memorable experiences.</P>
                <H3>Design Skills</H3>
                <P>Hello <br /></P>
              </Grid.Content>
            </Grid.Box>
            <Grid.Box>
              <Grid.Header>
                <FontAwesomeIcon icon={faCode} />
              </Grid.Header>
              <Grid.Content modifiers={['right']}>
                <H2>Developer</H2>
                <P>Front End Developer dedicated to writing clean, reusable, and performant codes.</P>
                <H3>Development Skills</H3>
              </Grid.Content>
            </Grid.Box>
          </Grid>
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

export default SkillsComponent
