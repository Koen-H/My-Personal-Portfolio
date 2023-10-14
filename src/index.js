import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import './css/style.css';
import './css/modern.css';
//import './css/matrix.css'; //Try out the matrix css! I think it has a cool theme to it.
import reportWebVitals from './reportWebVitals';
import Header from './components/js/Header';

import Content from './components/js/Content';
import Footer from './components/js/Footer';
import HomeThumbnailHeader from './components/js/HomeThumbnailHeader';

import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectPage from './components/js/ProjectPage';

//TODO: Import from a database
const projects = [
  {
    id: 0,
    slug: "Super-Xenon-Galaxy",
    name: "Super Xenon Galaxy",
    usp: "In Super Xenon Galaxy you use a custom controller to match color and collect cookies around space!",
    date: '29-11-2021',
    imageurl: ["/soft-coded/xenon/Image1.png", "/soft-coded/xenon/Image2.png", "/soft-coded/xenon/Image3.png", "/soft-coded/xenon/Image4.png"],
    videourl: "/soft-coded/xenon/superxenongalaxytrailer-1.mp4",
    projectCategories: [
      'Games',
    ],
    background: {
      css: false,
      video: false,
      images: false
    },
  },
  {
    id: 1,
    name: "Tetris",
    slug: "Tetris",
    usp: "Tetris is the same Tetris game as everyone knows, but in this version the levels are shaped in patterns making it harder (or easier) to play.",
    date: '27-01-2022',
    imageurl: ["/soft-coded/tetris/Image1.png", "/soft-coded/tetris/Image2.png", "/soft-coded/tetris/Image3.png", "/soft-coded/tetris/Image4.png"],
    videourl: "/soft-coded/tetris/movie.mkv",
    projectCategories: [
      'Games',
    ],
    background: {
      css: false,
      video: false,
      images: false
    },
  },
  {
    id: 2,
    name: "The Rolling cones",
    slug: "The-Rolling-Cones",
    usp: "In The Rolling Cones, you play around as a pinecone, placeobjects around the level to reach new areas and solve puzzles.",
    date: '12-05-2022',
    imageurl: ["/soft-coded/cones/image1.png", "/soft-coded/cones/image2.png", "/soft-coded/cones/image3.png", "/soft-coded/cones/image4.png"],
    videourl: "/soft-coded/cones/Trailercones.mp4",
    projectCategories: [
      'Games',
    ],
    background: {
      css: false,
      video: false,
      images: false
    },
  },
  {
    id: 3,
    name: "Sea of Debris",
    logo: "/soft-coded/sea/logo.png",
    slug: "Sea-of-Debris",
    usp: "The sea is full of junk, plastic is everywhere. In this fun VR experience it's your job to clean up the ocean!",
    description: "Sea of Debris is a game made for a school project where we had to make a game for a charity and encourage the players to donate towards the charity. Our charity was TeamSeas where every $1 donated is one less pound of trash in the ocean. We developed a VR game based on the donation system where the player plays as the person cleaning up the ocean, hopefully evoking an emotional response to the huge amount of trash they get to clean up in the ocean.",
    github: "https://github.com/Koen-H/My-project-URP-test",
    date: '23-09-2022',
    imageurl: ["/soft-coded/sea/Image1.png", "/soft-coded/sea/Image2.gif", "/soft-coded/sea/Image3.gif", "/soft-coded/sea/Image4.png"],
    videourl: "/soft-coded/sea/TrailerAE_V3.mp4",
    projectCategories: [
      'Games', 'Virtual Reality'
    ],
    background: {
      css: "linear-gradient(69.5deg, rgb(40, 48, 68) 2.3%, rgb(1, 179, 201) 97.6%)",
      video: "/soft-coded/sea/TrailerAE_V3.mp4",
      images: [
        "/soft-coded/sea/Image1.png",
        "/soft-coded/sea/Image2.gif",
        "/soft-coded/sea/Image3.gif",
        "/soft-coded/sea/Image4.png",
      ],
      headerOverlay: "linear-gradient(rgba(0, 0, 0,0)80%, rgba(0, 0, 0,0.4) 100%)",
        overlay: "rgba(0, 0, 0,0.4)"
    },
    css: {
      textColor: "white",
    },
    pageContent: [
      {
        blockType: 2,
        title: "Vacuum cleaner",
        text: "The vacuum cleaner is the main mechanic of the game, without it you wouldn't be able to complete the game.It has two modes, suck and shoot. The sucking mode will suck items towards you and once its close enough it will suck the item in it's inventory, saved for later.\n To prevent players from constantly holding the button it will slowly overheat if you use it for too long. The player can feel and see how hot it is by the red bar around the gun and the vibration in the controller. Once the inventory is full you can toggle the mode by pressing the A button to set it in shooting mode.\n The current mode is displayed by the arrow on top of the gun.",
        images: [
          {
            src:  "/soft-coded/sea/Image1.png",
            label: "The logo on top of the underwater scene",
          },
        ],
      },
      {
        blockType: 3,
        title: "Retrievable hook",
        text: "In the other hand you have the retrievable hook, it's not as improtant as the vacuum cleaner as you can finish the game without it. However, it will help you get a higher score as you will be able to pull items closer to you that the vacuum cleaner can't reach.\n The first step is to shoot it out just like a gun, if it misses it comes back without any plastic. If it manages to hit something it will stick to the plastic until a pull back motion is made on the left hand.",
        images: [
          {
            src:  "/soft-coded/sea/Image1.png",
            label: "The logo on top of the underwater scene",
          },
        ],
      },
      {
        blockType: 2,
        title: "Scoring points",
        text: "Once you set the vacuum cleaner in the blowing mode it will become a gun and you can shoot out",
        images: [
          {
            src:  "/soft-coded/sea/Image1.png",
            label: "The logo on top of the underwater scene",
          },
        ],
      },
      {
        blockType: 4,
        title: "Save the turtle!",
        text: "Based on research we found out that turtles, dolphins, whales, seals and general fish are the most impacted by the plastic in the ocean. We decided to add a turtle to the game that will circle around the player slowly gathering trash on its body. If the turtles has too much trash collected it will die.\n During testing we noticed that most people didn't care about it and just laughed when it was 'sleeping upside down on the ground' or even shooted it for fun... We kept the shooting at the turtle in as it can also be seen as an obstacle for when you are trying to shoot the trash in the submarine but also added bonus points to the score if the player manages to keep the turtle alive till the end of the game.",
        images: [
          {
            src:  "/soft-coded/sea/Image1.png",
            label: "The logo on top of the underwater scene",
          },
        ],
      },
      {
        blockType: 0,
        title: "Mechanics",
        text: "The game evolved around two main mechanics, the vacuum cleaner and the retrievable hook.",
        innerBlocks : [
          
          {
            blockType: 2,
            title: "Block 3",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non ante nibh. Sed malesuada magna a risus congue pretium. Vivamus ullamcorper elementum risus, in luctus magna commodo non. Nullam eget sem rhoncus, aliquet diam non, commodo est. Donec id nunc nec erat consectetur rhoncus at non leo. Aliquam sit amet nisl rutrum, maximus dolor et, molestie neque. Nullam ultricies congue nisl faucibus fringilla. Curabitur tincidunt lacinia consequat. Aenean bibendum euismod mi et euismod. Etiam dictum elit non interdum rhoncus. Phasellus luctus sagittis eros ac vulputate. Vivamus convallis tortor ut ante imperdiet sodales. Pellentesque auctor felis non laoreet eleifend. Sed ut massa sed augue sollicitudin tincidunt. Nulla ultricies at magna a faucibus. Quisque sit amet elit in nibh mattis rutrum. Etiam a quam pellentesque, placerat velit ac, pulvinar erat. Donec orci eros, interdum auctor neque eget, elementum lacinia turpis. Mauris nibh nibh, consectetur quis interdum rutrum, fringilla quis leo. Phasellus convallis dictum odio, nec fermentum sem aliquet in. Sed fringilla turpis orci, a placerat mauris euismod eget. Suspendisse a tempus magna.",
            images: [
              {
                src:  "/soft-coded/sea/Image1.png",
                label: "The logo on top of the underwater scene",
              },
              {
                src:  "/soft-coded/sea/Image1.png",
                label: "The logo on top of the underwater scene",
              },
              {
                src:  "/soft-coded/sea/Image1.png",
                label: "The logo on top of the underwater scene",
              },
            ],
          }
        ],
      },
      {
        blockType: 0,
        title: "Block 0",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non ante nibh. Sed malesuada magna a risus congue pretium. Vivamus ullamcorper elementum risus, in luctus magna commodo non. Nullam eget sem rhoncus, aliquet diam non, commodo est. Donec id nunc nec erat consectetur rhoncus at non leo. Aliquam sit amet nisl rutrum, maximus dolor et, molestie neque. Nullam ultricies congue nisl faucibus fringilla. Curabitur tincidunt lacinia consequat. Aenean bibendum euismod mi et euismod. Etiam dictum elit non interdum rhoncus. Phasellus luctus sagittis eros ac vulputate. Vivamus convallis tortor ut ante imperdiet sodales. Pellentesque auctor felis non laoreet eleifend. Sed ut massa sed augue sollicitudin tincidunt. Nulla ultricies at magna a faucibus. Quisque sit amet elit in nibh mattis rutrum. Etiam a quam pellentesque, placerat velit ac, pulvinar erat. Donec orci eros, interdum auctor neque eget, elementum lacinia turpis. Mauris nibh nibh, consectetur quis interdum rutrum, fringilla quis leo. Phasellus convallis dictum odio, nec fermentum sem aliquet in. Sed fringilla turpis orci, a placerat mauris euismod eget. Suspendisse a tempus magna.",
        innerBlocks : [
          {
            blockType: 1,
            title: "Block 0",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non ante nibh. Sed malesuada magna a risus congue pretium. Vivamus ullamcorper elementum risus, in luctus magna commodo non. Nullam eget sem rhoncus, aliquet diam non, commodo est. Donec id nunc nec erat consectetur rhoncus at non leo. Aliquam sit amet nisl rutrum, maximus dolor et, molestie neque. Nullam ultricies congue nisl faucibus fringilla. Curabitur tincidunt lacinia consequat. Aenean bibendum euismod mi et euismod. Etiam dictum elit non interdum rhoncus. Phasellus luctus sagittis eros ac vulputate. Vivamus convallis tortor ut ante imperdiet sodales. Pellentesque auctor felis non laoreet eleifend. Sed ut massa sed augue sollicitudin tincidunt. Nulla ultricies at magna a faucibus. Quisque sit amet elit in nibh mattis rutrum. Etiam a quam pellentesque, placerat velit ac, pulvinar erat. Donec orci eros, interdum auctor neque eget, elementum lacinia turpis. Mauris nibh nibh, consectetur quis interdum rutrum, fringilla quis leo. Phasellus convallis dictum odio, nec fermentum sem aliquet in. Sed fringilla turpis orci, a placerat mauris euismod eget. Suspendisse a tempus magna.",
          },
          {
            blockType: 2,
            title: "Block 3",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non ante nibh. Sed malesuada magna a risus congue pretium. Vivamus ullamcorper elementum risus, in luctus magna commodo non. Nullam eget sem rhoncus, aliquet diam non, commodo est. Donec id nunc nec erat consectetur rhoncus at non leo. Aliquam sit amet nisl rutrum, maximus dolor et, molestie neque. Nullam ultricies congue nisl faucibus fringilla. Curabitur tincidunt lacinia consequat. Aenean bibendum euismod mi et euismod. Etiam dictum elit non interdum rhoncus. Phasellus luctus sagittis eros ac vulputate. Vivamus convallis tortor ut ante imperdiet sodales. Pellentesque auctor felis non laoreet eleifend. Sed ut massa sed augue sollicitudin tincidunt. Nulla ultricies at magna a faucibus. Quisque sit amet elit in nibh mattis rutrum. Etiam a quam pellentesque, placerat velit ac, pulvinar erat. Donec orci eros, interdum auctor neque eget, elementum lacinia turpis. Mauris nibh nibh, consectetur quis interdum rutrum, fringilla quis leo. Phasellus convallis dictum odio, nec fermentum sem aliquet in. Sed fringilla turpis orci, a placerat mauris euismod eget. Suspendisse a tempus magna.",
            images: [
              {
                src:  "/soft-coded/sea/Image1.png",
                label: "The logo on top of the underwater scene",
              },
              {
                src:  "/soft-coded/sea/Image1.png",
                label: "The logo on top of the underwater scene",
              },
              {
                src:  "/soft-coded/sea/Image1.png",
                label: "The logo on top of the underwater scene",
              },
            ],
          }
        ],
      },
      {
        blockType: 1,
        title: "Block 111",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non ante nibh. Sed malesuada magna a risus congue pretium. Vivamus ullamcorper elementum risus, in luctus magna commodo non. Nullam eget sem rhoncus, aliquet diam non, commodo est. Donec id nunc nec erat consectetur rhoncus at non leo. Aliquam sit amet nisl rutrum, maximus dolor et, molestie neque. Nullam ultricies congue nisl faucibus fringilla. Curabitur tincidunt lacinia consequat. Aenean bibendum euismod mi et euismod. Etiam dictum elit non interdum rhoncus. Phasellus luctus sagittis eros ac vulputate. Vivamus convallis tortor ut ante imperdiet sodales. Pellentesque auctor felis non laoreet eleifend. Sed ut massa sed augue sollicitudin tincidunt. Nulla ultricies at magna a faucibus. Quisque sit amet elit in nibh mattis rutrum. Etiam a quam pellentesque, placerat velit ac, pulvinar erat. Donec orci eros, interdum auctor neque eget, elementum lacinia turpis. Mauris nibh nibh, consectetur quis interdum rutrum, fringilla quis leo. Phasellus convallis dictum odio, nec fermentum sem aliquet in. Sed fringilla turpis orci, a placerat mauris euismod eget. Suspendisse a tempus magna.",
        widthLimit: true,
      },
      {
        blockType: 2,
        title: "Block 2",
        text: "This is text for blocktype one!",
        images: [
          {
            src:  "/soft-coded/sea/posterFINAL.png",
            label: "Poster created for the game.",
            width: 25,
          },
        ]
      },
      {
        blockType: 3,
        title: "Block 3",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non ante nibh. Sed malesuada magna a risus congue pretium. Vivamus ullamcorper elementum risus, in luctus magna commodo non. Nullam eget sem rhoncus, aliquet diam non, commodo est. Donec id nunc nec erat consectetur rhoncus at non leo. Aliquam sit amet nisl rutrum, maximus dolor et, molestie neque. Nullam ultricies congue nisl faucibus fringilla. Curabitur tincidunt lacinia consequat. Aenean bibendum euismod mi et euismod. Etiam dictum elit non interdum rhoncus. Phasellus luctus sagittis eros ac vulputate. Vivamus convallis tortor ut ante imperdiet sodales. Pellentesque auctor felis non laoreet eleifend. Sed ut massa sed augue sollicitudin tincidunt. Nulla ultricies at magna a faucibus. Quisque sit amet elit in nibh mattis rutrum. Etiam a quam pellentesque, placerat velit ac, pulvinar erat. Donec orci eros, interdum auctor neque eget, elementum lacinia turpis. Mauris nibh nibh, consectetur quis interdum rutrum, fringilla quis leo. Phasellus convallis dictum odio, nec fermentum sem aliquet in. Sed fringilla turpis orci, a placerat mauris euismod eget. Suspendisse a tempus magna.",
        images: [
          {
            src:  "/soft-coded/sea/Image1.png",
            label: "The logo on top of the underwater scene",
          },
          {
            src:  "/soft-coded/sea/Image1.png",
            label: "The logo on top of the underwater scene",
          },
          {
            src:  "/soft-coded/sea/Image1.png",
            label: "The logo on top of the underwater scene",
          },
        ],
      },
      {
        blockType: 5,
        title: "Block 4",
        text: "This is text for blocktype 4!",
        video: "/soft-coded/sea/TrailerAE_V3.mp4",
      },
    ],
  }
]


const projectPages =
  projects.map((project) =>
    <Route key={project.id} exact path={`/project/${project.slug}`} element={<ProjectPage project={project} />} />
  );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home projects={projects} />} />
        {projectPages}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
