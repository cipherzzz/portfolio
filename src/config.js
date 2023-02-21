const profile = {
  fullName: 'MARK MATHIS',
  description: 'BUILDER',
  // The basepath is the assets folder
  /// the file sould be imported in assets-import.js
  avatarPath: 'mark.jpeg',
  about: {
    title: `About Me`,
    description: `I fell down the crypto rabbit hole in 2017 and have been hooked ever since. I have worked in the Defi, Gamefi, and NFT space as everything from a fullstack dev to CTO and love being hands on. 
    
    I am also an active contributor to the open source community and have contributed to projects such as Ethereum Classic, Decred, Origin Protocol, and the Cosmos SDK.`,
    findMeOn: [
      {
        iconName: 'location',
        text: 'Charlotte, NC, USA',
        url: '',
        hoverColor: '#546e7a'
      },
      {
        iconName: 'twitter',
        text: '@cipherzzz',
        url: 'https://twitter.com/cipherzzz',
        hoverColor: '#1da1f2'
      },
      {
        iconName: 'email',
        text: 'dev@cipherz.com',
        url: 'mailto://email@email.com',
        hoverColor: '#546e7a'
      },
      {
        iconName: 'telegram',
        text: '@cipherzzz',
        url: 'https://telegram.org',
        hoverColor: '#e9641c'
      }
    ]
  },
  social: [
    {
      iconName: 'twitter',
      url: 'https://twitter.com/username',
      text: "I'm on Twitter",
      hoverColor: '#1da1f2'
    },
    {
      iconName: 'telegram',
      url: 'https://t.me/username',
      text: "I'm on Telegram",
      hoverColor: '#0088cc'
    },
    {
      iconName: 'github',
      url: 'https://github.com/username',
      text: "I'm on Github",
      hoverColor: '#000'
    },
    {
      iconName: 'email',
      url: 'mailto:email@email.co',
      text: 'Send me an email',
      hoverColor: '#000'
    }
  ]
}

const projects = [
  {
    title: 'Project Title #1',
    img: '',
    description: 'Lorem ipsum dolor sit amet, in nulla hendrerit ius, sed et congue graeci, qui id propriae accusata.',
    categories: ['Sample', 'Open source', 'React'],
    siteUrl: 'https://amazing.project.com',
    sourceCodeUrl: 'https://github.com/user/project'
  },
  {
    title: 'Project Title #2',
    img: 'https://www.nethruster.com/assets/img/icons/apple-touch-icon.png',
    description: 'Lorem ipsum dolor sit amet, in nulla hendrerit ius, sed et congue graeci, qui id propriae accusata.',
    categories: ['Sample', 'Freeware', 'Go'],
    siteUrl: 'https://amazing.project.com'
  },
  {
    title: 'Project Title #3',
    img: 'https://www.nethruster.com/assets/img/wareader.svg',
    description: 'Lorem ipsum dolor sit amet, in nulla hendrerit ius, sed et congue graeci, qui id propriae accusata.',
    categories: ['Wat', 'Linux', 'LoL'],
    sourceCodeUrl: 'https://github.com/user/:O'
  }
]

const formUrl = 'http://localhost:4000'
const ReCAPTCHAKey = '6LcBOC8UAAAAAM9YRyBp1RR-1NnwvMU8UDsR63Vu'
// The basepath is the assets folder
/// the file sould be imported in assets-import.js
const missingProjectIcon = 'no-work-icon.jpg'

export {
  profile,
  projects,
  formUrl,
  ReCAPTCHAKey,
  missingProjectIcon
}
