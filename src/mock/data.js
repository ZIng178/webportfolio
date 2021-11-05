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
  resume: 'https://docs.google.com/document/d/1QzfHyRlTRPtkIRVkp_4dnOPInSXxM6VJXg26slaU5mw/edit', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'mythicimage.png',
    title: ' MYTHIC Fashion ( Full Stack Web Developer ) ',
    info:
      ' A  E-Commerce Fashion Website built using React , Redux-Toolkit , Node , MongoDB , Express, HTML & CSS  ',
    info2: 'A fully responsive web app deployed on heroku using the MERN STACK  ',
    url: 'https://salty-chamber-29544.herokuapp.com/',
    repo: 'https://github.com/ZIng178/responsive-ecommerce',
  },

  {
    id: nanoid(),
    img: 'paisaproject.jpg',
    title: 'Paisa ',
    info: 'Virtual Banking Made Easy ',
    info2: 'A React App designed with React styled components .',
    url: 'https://paisa.netlify.app/',
    repo: 'https://github.com/ZIng178/paisa',
  },

  {
    id: nanoid(),
    img: 'techstuffproject.jpg',
    title: 'Use My Tech Stuff',
    info: 'An air bnb like platform for your expensive gadgets',
    info2:
      'This was a school project i worked on as a Front End Developer , I was responsible for all the state manangement of the app along with my batch mate , we achieved all the CRUD operations required by the app using Reacts Contex API ',
    url: 'https://marketing-page-opal.vercel.app/',
    repo: 'https://github.com/bwptpt-use-my-tech-stuff-2',
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
