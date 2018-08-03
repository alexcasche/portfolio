import React from 'react'
import { Section, Wrapper, Heading, Paragraph } from 'elements'

const About = () => {
  return (
    <Section style={{paddingBottom: '200px'}}>
      <Wrapper>
        <Heading>Hi I'm Alex. Thanks for stopping by.</Heading>
        <Paragraph>
          Ever since I was a little kid, I've had an urge to create things. If I could imagine it, chances are I tried to build it. Fast forward 15 years and I'm still driven by that same urge.  When I became a designer and developer, I found an outlet to be innovative, curious, and bold. Now instead of lego cities and tree forts, I build startups and applications.
        </Paragraph>
      </Wrapper>
    </Section>
  )
}

export default About