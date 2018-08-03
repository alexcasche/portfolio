import { faPaintBrush, faCode } from '@fortawesome/free-solid-svg-icons'

export default [
  {
    icon: faPaintBrush,
    title: 'Designer',
    text: 'UI/UX Designer focussed on creating clean interfaces, and memorable experiences.',
    sections: [
      { 
        title: 'Design Skills',
        content: 'Websites, Apps, Emails, Logos, Graphics, Print Media, Digital Media'
     },
     {
      title: 'Tools I Use',
      content: [ 'Illustrator', 'Photoshop', 'Indesign', 'XD', 'Sketch' ]
     }
    ]
  },
  {
    icon: faCode,
    title: 'Developer',
    text: 'Web Developer dedicated to writing organized, reusable, and performant codes.',
    sections: [
      { 
        title: 'Dev Skills',
        content: 'HTML5, SCSS, ES6, Node, MongoDB, React, Redux, RESTful Apis'
     },
     {
      title: 'Tools I Use',
      content: [ 'Atom', 'PostCSS', 'Babel', 'Github', 'Terminal' ]
     }
    ]
  }
]