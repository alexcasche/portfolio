import React from 'react'
import { Table } from 'blocks'
import { Section, Wrapper, Flex, Icon } from 'elements'
import skills from './skills'

const Skills = () => {
  return (
    <Section modifiers={['dark']}>
      <Section.Stripes />
      <Wrapper style={{marginTop: '-200px'}}>
        <Flex>
          { skills.map((skill, index) =>
            <Flex.Item key={index} modifiers={['2']}>
              <Table modifiers={index === 0 ? ['left'] : ['right']}>
                <Table.Head>
                  <Icon icon={skill.icon} />
                </Table.Head>
                <Table.Title>{skill.title}</Table.Title>
                <Table.Row>
                  <Table.Data>{skill.text}</Table.Data>
                </Table.Row>
                <Table.Row modifiers={['section']}>{skill.sections[0].title}</Table.Row>
                <Table.Row>
                  <Table.Data>{skill.sections[0].content}</Table.Data>
                </Table.Row>
                <Table.Row modifiers={['section']}>{skill.sections[1].title}</Table.Row>
                <Table.Row>
                  <Table.Data>
                    { skill.sections[1].content.map((item) =>
                      <span key={item}>{item}<br/></span>
                    )}
                  </Table.Data>
                </Table.Row>
              </Table>
            </Flex.Item>
          )}
        </Flex>
      </Wrapper>
    </Section>
  )
}

export default Skills
