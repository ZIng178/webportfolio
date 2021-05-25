import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Wangdi Tenzing ', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Wangdi Tenzing ',
  subtitle: 'Full Stack Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/10_V6M6z5N6h4TJ6LH1Wc9zJPxCZI_tnF/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'paisaproject.jpg',
    title: 'Paisa ',
    info: 'Virtual Banking Made Easy ',
    info2: 'A React App designed with CSS',
    url: 'https://paisa.netlify.app/',
    repo: 'https://github.com/ZIng178/paisa', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'kbcproject.jpg',
    title: ' Who wants to be a Millionare? ',
    info:
      ' A fun React Game clone of the famous television game show Who wants to be a Millionare ',
    info2: '',
    url: 'https://whowantstobeamillionare.netlify.app',
    repo: 'https://github.com/ZIng178/quix', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'techstuffproject.jpg',
    title: 'Use My Tech Stuff',
    info: 'An air bnb like platform for your expensive gadgets',
    info2: '',
    url: 'https://marketing-page-opal.vercel.app/',
    repo: 'https://github.com/bwptpt-use-my-tech-stuff-2', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'techstuffproject.jpg',
    title: 'Use My Tech Stuff',
    info: 'An air bnb like platform for your expensive gadgets',
    info2: '',
    url: 'https://marketing-page-opal.vercel.app/',
    repo: 'https://github.com/bwptpt-use-my-tech-stuff-2', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'wangdi457@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/wangdi-tenzing/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ZIng178',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
