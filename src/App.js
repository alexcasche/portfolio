import React from 'react'
import { Intro, About, Skills, Projects } from 'sections'

const styles = {
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
}

const App = () => {
  return (
    <div style={styles}>
      <Intro />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
