import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Brandon Olin | JavaScript Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Brandon Olin',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    'Born in the frigid tundra of Buffalo, NY, the long winters indoors left plenty of time for fiddling with technology. I showed a knack for computers and spent much of my early years building gaming rigs and learning their ins and outs.',
  paragraphTwo:
    'I ended up pursuing a business degree and working various jobs in the field, eventually going down the path of entrepreneurship and location independence. This culminated in 3 years spent living and working remotely in South America, Europe, and Asia.',
  paragraphThree:
    'Now that I’ve finished the Le Wagon Ruby on Rails coding bootcamp I’m transitioning to programming as my full-time profession. I’m looking for positions anywhere in the U.S where I can make that happen!',
  resume: 'https://drive.google.com/open?id=1gCqp4YuhbTDPdICXZP0ml1h4Q6mwO2WJ', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'smartbrain.png',
    title: 'Smartbrain',
    info:
      'Full stack React + Node.js + PostgreSQL app, built solo as the final exercise in the Zero to Mastery full-stack web developer course.',
    info2:
      'Uses Clarifai machine learning AI to detect faces in images, and authorizes users while tracking the number of entries they submit.',
    url: 'https://smartbrain-js.herokuapp.com/',
    repo: 'https://github.com/brandon-olin/smartbrain', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'sustainable.png',
    title: 'SustainABLE',
    info:
      'Job board style app built with a team of three other developers in the 8th and 9th weeks of the Le Wagon coding bootcamp',
    info2: 'Primarily responsible for the UX/UI and front end design.',
    url: 'http://www.sustainable-app.com/',
    repo: 'https://github.com/kathrin298/sustainABLE', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'animal_kingdom.png',
    title: 'Animal Kingdom',
    info: 'Marketplace style app built with the same team in the 7th week of the Le Wagon bootcamp',
    info2: '',
    url: 'https://animal-kingdom-kathrin298.herokuapp.com/',
    repo: 'https://github.com/kathrin298/animal_kingdom', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'brandon@brandonolin.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/BrandonOlin',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/brandon-olin',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/brandon-olin/',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: 'https://codepen.io/brandon-olin',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
