import MinimalistPortfolioImage from '../images/minimalist-portfolio-images/minimalist-portfolio.png';
import ProjectOneHomepageImage from '../images/web_project_1-images/homepage.png';
import JavascriptProjectImage from '../images/javascript-projects-images/javascript-homepage.png';
import PortlandPortfolioImage from '../images/web_project_3-images/portland-portfolio.png';
import InstagramHomepageImage from '../images/web_project_4-images/instagram-homepage.png';
import PlanetsReactImage from '../images/planets-react-images/planets-react-mainImage.png';
import ApiaryHomepageImage from '../images/apiary-images/apiary-homepage.png';
import NewsExplorerHomepageImage from '../images/news-explorer-images/news-explorer-homepage.png';
import DotcotHomepageImage from '../images/dotcot-images/dotcot-homepage.png';
import ABTHomepageImage from '../images/abt-images/abt-homepage.png';
import ConfectioneryImage from '../images/confectionery-images/confectionery-homepage.png';
import HistoryMuffinImage from '../images/history-muffin-images/history-muffin-homepage-2.png';
import GoFundYourselfImage from '../images/gofundyourself-images/gofundyourself-homepage.png';

const projectCards = [
  {
    id: 13,
    image: GoFundYourselfImage,
    alt: 'GoFundYourself fundraising site',
    description:
      'A fundraising site where users can create and manage fundraisers, or donate to fundraisers using credit card handling',
    pageLink: 'https://gofundyourself.lol',
    githubLink: 'https://github.com/cjmaret/gofundyourself-frontend',
    languages: [
      'react',
      'mongodb',
      'graphql',
      'keystone',
      'typescript',
      'next',
      'jest',
      'css',
      'html5',
    ],
  },
  {
    id: 12,
    image: HistoryMuffinImage,
    alt: 'History Muffin E-commerce store',
    description:
      'An e-commerce store where users can purchase or sell products, create an account, manage their products, and make purchases using Stripe',
    pageLink: 'https://historymuffin.com',
    githubLink: 'https://github.com/cjmaret/history-muffin-frontend',
    languages: [
      'react',
      'mongodb',
      'graphql',
      'keystone',
      'typescript',
      'next',
      'jest',
      'css',
      'html5',
    ],
  },
  {
    id: 11,
    image: ConfectioneryImage,
    alt: 'The Confectionery Homepage',
    description:
      'A video portfolio for a NYC-based filmmaking company, with a cinematic style and dynamic content management',
    pageLink: 'https://goofy-jang-9e020a.netlify.app',
    githubLink: 'https://github.com/cjmaret/confectionery',
    languages: ['react', 'gatsby', 'contentful'],
  },
  {
    id: 10,
    image: ABTHomepageImage,
    alt: 'ABT Homepage',
    description:
      'Frontend for a NYS fire protection company, with equipment/suppression info, and contact form via EmailJS',
    pageLink: 'https://abtfireprotection.com',
    githubLink: 'https://github.com/cjmaret/abt',
    languages: ['react', 'next', 'css', 'html5'],
  },
  {
    id: 9,
    image: DotcotHomepageImage,
    alt: 'Dotcot Homepage',
    description:
      'An app which connects investors and startups, featuring a news feed of tailor-made startup pitches',
    pageLink: 'https://peaceful-woodland-39661.herokuapp.com/welcome',
    languages: ['react', 'mongodb', 'graphql', 'node', 'mocha', 'css', 'html5'],
  },
  {
    id: 8,
    image: NewsExplorerHomepageImage,
    alt: 'News Explorer',
    description:
      'A news article website which lets users search for real-world news pieces, and save them for later reading',
    pageLink: 'https://news-explorer-site.netlify.app/',
    githubLink: 'https://github.com/cjmaret/news-explorer-frontend',
    languages: ['react', 'mongodb', 'express', 'node', 'css', 'html5'],
  },
  {
    id: 7,
    image: ApiaryHomepageImage,
    alt: 'Apiary Homepage',
    description:
      'Ths project uses React and Contentful to allow the client to update relevant site content without having to interact with any code',
    pageLink: 'https://apiary-project.netlify.app/#/',
    githubLink: 'https://github.com/cjmaret/apiary',
    languages: ['react', 'graphql', 'contentful', 'css', 'html5'],
  },
  {
    id: 6,
    image: PlanetsReactImage,
    alt: 'Planets Infographic page',
    description:
      'This aesthetic planets fact-site uses a Single Page App built by React, displaying its content in an optimized fashion',
    pageLink: 'https://cjmaret.github.io/planets-fact-site-react/',
    githubLink: 'https://github.com/cjmaret/planets-fact-site-react',
    languages: ['react', 'css', 'html5'],
  },
  {
    id: 5,
    image: InstagramHomepageImage,
    alt: 'Instagram-style homepage',
    description:
      'An Instagram-style webpage which showcases Javascript form validation and image-card adding via templates',
    pageLink: 'https://cjmaret.students.nomoreparties.site/',
    githubLink: 'https://github.com/cjmaret/react-around-api-full',
    languages: ['react', 'mongodb', 'express', 'node', 'css', 'html5'],
  },
  {
    id: 4,
    image: PortlandPortfolioImage,
    alt: 'travel-guide landing page',
    description:
      'A fully responsive travel-guide landing page following Figma designs, using HTML5, CSS Grid and Flexbox methods',
    pageLink: 'https://cjmaret.github.io/web_project_3/',
    githubLink: 'https://github.com/cjmaret/web_project_3',
    languages: ['css', 'html5'],
  },
  {
    id: 3,
    image: JavascriptProjectImage,
    alt: 'javascript exercises page',
    description:
      'A series of small Javascript exercises displaying a range of functions, widgets, and designs',
    pageLink: 'https://cjmaret.github.io/Javascript-30-Days/',
    githubLink: 'https://github.com/cjmaret/Javascript-30-Days',
    languages: ['vanillajs'],
  },
  {
    id: 2,
    image: ProjectOneHomepageImage,
    alt: 'learning app homepage',
    description:
      'A desktop page focusing on optimizing learning techniques, made with image/video embedding, and CSS animations',
    pageLink: 'https://cjmaret.github.io/web_project_1/',
    githubLink: 'https://github.com/cjmaret/web_project_1',
    languages: ['css', 'html5', 'vanillajs'],
  },
  {
    id: 1,
    image: MinimalistPortfolioImage,
    alt: 'minimalist portfolio landing page',
    description:
      "A minimalist portfolio, showcasing a sleek and functional layout, and emphasizing a 'less is more' design philosophy",
    pageLink: 'https://cjmaret.github.io/minimalist_portfolio_website/',
    githubLink: 'https://github.com/cjmaret/minimalist_portfolio_website',
    languages: ['css', 'html5', 'vanillajs'],
  },
];

export default projectCards;
