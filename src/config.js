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
      url: 'https://twitter.com/cipherzzz',
      text: "I'm on Twitter",
      hoverColor: '#1da1f2'
    },
    {
      iconName: 'telegram',
      url: 'https://t.me/cipherzzz',
      text: "I'm on Telegram",
      hoverColor: '#0088cc'
    },
    {
      iconName: 'github',
      url: 'https://github.com/cipherzzz',
      text: "I'm on Github",
      hoverColor: '#000'
    },
    {
      iconName: 'email',
      url: 'mailto:dev@cipherz.com',
      text: 'Send me an email',
      hoverColor: '#000'
    }
  ]
}

const projects = [
  {
    title: 'Decred',
    img: 'https://avatars.githubusercontent.com/u/16297194?s=200&v=4',
    description: 'I worked as a paid contributor to the Decred project',
    categories: ['Go', 'Open Source', 'Blockchain'],
    siteUrl: 'https://decred.org/',
    sourceCodeUrl: 'https://github.com/pulls?q=is%3Apr+author%3Acipherzzz+user%3Adecred'
  },
  {
    title: 'Origin Protocol',
    img: 'https://avatars.githubusercontent.com/u/30638653?s=200&v=4',
    description: 'I worked as a core contributor with Origin Protocol on their story.xyz platform and their OUSD protocol',
    categories: ['Typescript', 'Solidity', 'NFT', 'Open Source', 'Blockchain'],
    siteUrl: 'https://www.originprotocol.com/',
    sourceCodeUrl: 'https://github.com/pulls?q=is%3Apr+user%3Aoriginprotocol+author%3Acipherzzz'

  },
  {
    title: 'Cosmos SDK',
    img: 'https://avatars.githubusercontent.com/u/228843?s=200&v=4',
    description: 'I am a regular contributor to the Cosmos SDK',
    categories: ['Go', 'Open Source', 'Blockchain'],
    siteUrl: 'https://cosmos.network/',
    sourceCodeUrl: 'https://github.com/pulls?q=is%3Apr+author%3Acipherzzz+user%3Acosmos'
  },
  {
    title: 'Smarterverse',
    img: 'https://media.licdn.com/dms/image/D4D0BAQEmKIG-JKZSdQ/company-logo_200_200/0/1667240411850?e=1684972800&v=beta&t=JoFDNcwavMVyNGmzC2W1mw-gbKa-8U5BC5W_svdz8oI',
    description: 'Served as CTO for Smarterverse, a blockchain based metaverse',
    categories: ['Metaverse', 'Unity', 'NFT', 'Blockchain', 'Solidity', 'Typescript'],
    sourceCodeUrl: 'https://finance.yahoo.com/news/ahead-november-launch-habytat-smarterverse-123000403.html?guccounter=1&guce_referrer=aHR0cHM6Ly9zZWFyY2guYnJhdmUuY29tLw&guce_referrer_sig=AQAAANmS64eA2MYVYDzS7DfjCK9wEFVKsZxMctvuCtsJhcliFQKEpwTdNpsNHWNDAw3eF-BYFeIw7-zF4nflzugZD01td63xgOakP2uTQRKEVTm4otK4qOdiE5FFuG8UhknGW1kE8ZlNuRjqkgi7vZJLMSX4vLDT4FXO2knDKFgjVTnm',
    siteUrl: 'https://smarterverse.com/'  
  },
  {
    title: 'VenVuu',
    img: 'https://i.seadn.io/gae/Hc4f5rb9-xu3rdD32aNiguXLWigIFas77MmFS9aYiGiqA01vw6acLG9Rg7rqGkrKDIJjmaCPdpgUv9ChpAFj_UALumbnIzdxDppOt1s?auto=format&w=256',
    description: 'Co-Founder of VenVuu, a patent-pending advertising solution for the metaverse',
    categories: ['Metaverse', 'NFT', 'Blockchain', 'Solidity', 'Typescript'],
    siteUrl: 'https://opensea.io/collection/venvuu'  
  },
  {
    title: 'AlphaPoint',
    img: 'https://avatars.githubusercontent.com/u/20631660?s=200&v=4',
    description: 'I worked as a core dev on the Alphapoint platform',
    categories: ['Solidity', 'Typescript', 'Blockchain'],
    siteUrl: 'https://alphapoint.com/'  
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
