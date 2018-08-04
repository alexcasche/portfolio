import React from 'react'
import { Section, Wrapper, Heading, Paragraph } from 'elements'

const About = () => {
  return (
    <Section style={{paddingBottom: '200px'}}>
      <Wrapper>
        <Heading>Hi I'm Alex. Thanks for stopping by.</Heading>
        <Paragraph>
          Ever since I was a little kid, I've had this urge to create things. Whenever I imagined something, I would try to build it. Fast forward 15 years and I'm still driven by the same urge.  I became a designer and developer, because it gave me an outlet to be creative, innovative and bold. Now instead of lego cities and tree forts, I build startups and applications.
        </Paragraph>
      </Wrapper>
    </Section>
  )
}

export default About