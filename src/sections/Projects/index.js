import React from 'react'
import { Gallery } from 'blocks'
import { Section, Wrapper, Heading, Paragraph, Image, Link, Button } from 'elements'
import projects from './projects'

const Projects = () => {
  return (
    <Section>
      <Wrapper>
        <Heading>Recent Work</Heading>
        <Paragraph>
          Here are some of my latest projects. Like what you see? <Link href="mailto:alexcasche@gmail.com">Contact Me</Link>.
        </Paragraph>
        <Gallery style={{marginTop: '40px'}}>
        { projects.map((project, index) =>
          <Gallery.Item key={index} modifiers={[3]} style={{padding: '10px'}}>
            <Gallery.Figure>
              <Image src={project.image} />
              <Gallery.Caption>
                <Paragraph>{project.caption}</Paragraph>
                <Button.Link href={project.link} target="_blank">View Project</Button.Link>
              </Gallery.Caption>
            </Gallery.Figure>
          </Gallery.Item>
        )}
        </Gallery>
      </Wrapper>
    </Section>
  )
}

export default Projects
