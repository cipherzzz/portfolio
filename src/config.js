const profile = {
  fullName: "MARK MATHIS",
  description: "BUILDER",
  // The basepath is the assets folder
  /// the file sould be imported in assets-import.js
  avatarPath: "mark.jpeg",
  about: {
    title: `About Me`,
    description: `I fell down the crypto rabbit hole in 2017 and have been hooked ever since. I have worked in the Defi, Gamefi, and NFT space as everything from a fullstack dev to CTO and love being hands on. 
    
    I am also an active contributor to the open source community and have contributed to projects such as Ethereum Classic, Decred, Origin Protocol, and the Cosmos SDK.`,
    findMeOn: [
      {
        iconName: "location",
        text: "Charlotte, NC, USA",
        url: "",
        hoverColor: "#546e7a",
      },
      {
        iconName: "twitter",
        text: "@cipherzzz",
        url: "https://twitter.com/cipherzzz",
        hoverColor: "#1da1f2",
      },
      {
        iconName: "email",
        text: "dev@cipherz.com",
        url: "mailto://email@email.com",
        hoverColor: "#546e7a",
      },
      {
        iconName: "telegram",
        text: "@cipherzzz",
        url: "https://telegram.org",
        hoverColor: "#e9641c",
      },
    ],
  },
  social: [
    {
      iconName: "twitter",
      url: "https://twitter.com/cipherzzz",
      text: "I'm on Twitter",
      hoverColor: "#1da1f2",
    },
    {
      iconName: "telegram",
      url: "https://t.me/cipherzzz",
      text: "I'm on Telegram",
      hoverColor: "#0088cc",
    },
    {
      iconName: "github",
      url: "https://github.com/cipherzzz",
      text: "I'm on Github",
      hoverColor: "#000",
    },
    {
      iconName: "email",
      url: "mailto:dev@cipherz.com",
      text: "Send me an email",
      hoverColor: "#000",
    },
  ],
};

const projects = [
  {
    title: "cSigma.finance",
    img: "https://csigma.finance/dash/wp-content/uploads/2023/06/main-svg-logo.svg",
    description: "Served as CTO for cSigma.finance, a RWA protocol",
    categories: ["Defi", "Solidity", "Typescript"],
    sourceCodeUrl:
      "https://finance.yahoo.com/news/csigma-finance-launches-private-credit-143700503.html?.tsrc=fin-srch",
    siteUrl: "https://csigma.finance",
  },
  {
    title: "Decred",
    img: "https://avatars.githubusercontent.com/u/16297194?s=200&v=4",
    description: "I worked as a paid contributor to the Decred project",
    categories: ["Go", "Open Source", "Blockchain"],
    siteUrl: "https://decred.org/",
    sourceCodeUrl:
      "https://github.com/pulls?q=is%3Apr+author%3Acipherzzz+user%3Adecred",
  },
  {
    title: "Origin Protocol",
    img: "https://avatars.githubusercontent.com/u/30638653?s=200&v=4",
    description: "I worked as a core contributor with Origin Protocol",
    categories: ["Typescript", "Solidity", "NFT"],
    siteUrl: "https://www.originprotocol.com/",
    sourceCodeUrl:
      "https://github.com/pulls?q=is%3Apr+user%3Aoriginprotocol+author%3Acipherzzz",
  },
  {
    title: "Cosmos SDK",
    img: "https://avatars.githubusercontent.com/u/228843?s=200&v=4",
    description: "I am a regular contributor to the Cosmos SDK",
    categories: ["Go", "Open Source", "Blockchain"],
    siteUrl: "https://cosmos.network/",
    sourceCodeUrl:
      "https://github.com/pulls?q=is%3Apr+author%3Acipherzzz+user%3Acosmos",
  },
  {
    title: "Habytat.io",
    img: "https://imgs.search.brave.com/opStxJe8keLnXtTtvXQkphoyXcVo6PdIbjq4P6-d2_8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbGF5/LWxoLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS92cmgxZmcxOEdW/YjQ3azZKR005MlRQ/YkxFQ3FXVXBEbElL/ODJxU0dqRkFZWkRF/bS1WUE9YNlFWZ0lk/Mm4wX2Z6Mmc9czc1/LXJ3",
    description: "Served as CTO for Habytat, a blockchain based metaverse",
    categories: ["Metaverse", "Solidity", "Typescript"],
    sourceCodeUrl:
      "https://finance.yahoo.com/news/ahead-november-launch-habytat-smarterverse-123000403.html?guccounter=1&guce_referrer=aHR0cHM6Ly9zZWFyY2guYnJhdmUuY29tLw&guce_referrer_sig=AQAAANmS64eA2MYVYDzS7DfjCK9wEFVKsZxMctvuCtsJhcliFQKEpwTdNpsNHWNDAw3eF-BYFeIw7-zF4nflzugZD01td63xgOakP2uTQRKEVTm4otK4qOdiE5FFuG8UhknGW1kE8ZlNuRjqkgi7vZJLMSX4vLDT4FXO2knDKFgjVTnm",
    siteUrl: "https://habytat.io/",
  },
  {
    title: "VenVuu",
    img: "https://i.seadn.io/gae/Hc4f5rb9-xu3rdD32aNiguXLWigIFas77MmFS9aYiGiqA01vw6acLG9Rg7rqGkrKDIJjmaCPdpgUv9ChpAFj_UALumbnIzdxDppOt1s?auto=format&w=256",
    description:
      "Co-Founder of VenVuu, a patent-pending advertising solution for the metaverse",
    categories: ["Metaverse", "NFT", "Blockchain"],
    siteUrl: "https://opensea.io/collection/venvuu",
  },
  {
    title: "AlphaPoint",
    img: "https://avatars.githubusercontent.com/u/20631660?s=200&v=4",
    description: "I worked as a core dev on the Alphapoint platform",
    categories: ["Solidity", "Typescript", "Blockchain"],
    siteUrl: "https://alphapoint.com/",
  },
  {
    title: "BountyX",
    img: "https://avatars.githubusercontent.com/u/126303446?s=200&v=4",
    description: "Eth Denver 2023 Hackathon Project",
    categories: ["Open Source", "Typescript", "Solidity"],
    siteUrl: "https://bountyx.vercel.app//",
    sourceCodeUrl:
      "https://github.com/Bounty-X/bountyx/pulls?q=is%3Apr+author%3Acipherzzz",
  },
];

const formUrl = "http://localhost:4000";
const ReCAPTCHAKey = "6LcBOC8UAAAAAM9YRyBp1RR-1NnwvMU8UDsR63Vu";
// The basepath is the assets folder
/// the file sould be imported in assets-import.js
const missingProjectIcon = "no-work-icon.jpg";

export { profile, projects, formUrl, ReCAPTCHAKey, missingProjectIcon };
