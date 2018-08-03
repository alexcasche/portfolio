import React from 'react'
import { Table } from 'blocks'
import { Section, Wrapper, Icon } from 'elements'
import skills from './skills'

const Skills = () => {
  return (
    <Section modifiers={['dark']}>
      <Section.Stripes />
      <Wrapper style={{marginTop: '-200px'}}>
        <Table>
          { skills.map((skill, index) =>
            <Table.Item key={index} modifiers={['2']}>
              <Table.Head>
                <Icon icon={skill.icon} />
              </Table.Head>
              <Table.Body modifiers={index === 0 ? ['left'] : ['right']}>
                <Table.Head modifiers={[2]}>{skill.title}</Table.Head>
                <Table.Text>{skill.text}</Table.Text>
                <Table.Head modifiers={[3]}>{skill.sections[0].title}</Table.Head>
                <Table.Text>{skill.sections[0].content}</Table.Text>
                <Table.Head modifiers={[3]}>{skill.sections[1].title}</Table.Head>
                <Table.Text>
                  { skill.sections[1].content.map((item) =>
                    <span key={item}>{item}<br/></span>
                  )}
                </Table.Text>
              </Table.Body>
            </Table.Item>
          )}
        </Table>
      </Wrapper>
    </Section>
  )
}

export default Skills
