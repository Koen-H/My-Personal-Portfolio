import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import './css/style.css';
import './css/modern.css';
//import './css/matrix.css'; //Try out the matrix css! I think it has a cool theme to it.
import reportWebVitals from './reportWebVitals';
import Header from './components/js/Header';

import ScrollTop from './components/js/ScrollTop';
import Footer from './components/js/Footer';


import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectPage from './components/js/ProjectPage';

//TODO: Import from a database
const projects = [
  {
    id: 0,
    name: "Super Xenon Galaxy",
    logo: "/soft-coded/xenon/logo.png",
    slug: "Super-Xenon-Galaxy",
    usp: "In Super Xenon Galaxy you use a custom controller to match color and collect energy around space!",
    description: "In Super Xenon Galaxy you match your color with the related energy to pick them up. For each energy you collect you will get a small speed boost which will stack the more you get.\n There are enemies which will try to stop you, breaking your momentum and streak. But don’t worry. There’s also a powerup which will allow you to collect all the energy of your current color when you pick it up.\nThe game is intended to be played with the custom made controller. But is also playable with a keyboard.",
    github: "",
    date: '29-11-2021',
    imageurl: ["/soft-coded/xenon/Image1.png", "/soft-coded/xenon/Image2.png", "/soft-coded/xenon/Image3.png", "/soft-coded/xenon/Image4.png"],
    videourl: "/soft-coded/xenon/superxenongalaxytrailer-1.mp4",
    projectCategories: [
      'Games',
    ],
    background: {
      css: "rgba(39, 34, 43,1)",
      video: "/soft-coded/xenon/superxenongalaxytrailer-1.mp4",
      images: [
        "/soft-coded/xenon/xenongalaxybackground.gif",
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
        title: "Collect and match!",
        text: "The main goal of the game is to stay alive for as long as possible by collecting the energy on time. Energy will only last for around 10 seconds and once it goes away you'll lose one heart. To pick up energy you need to match the color of the spaceship with the color of the energy and press the big white button on the controller. Whenever you succesfully pick up energy you get a small speed boost which will stack if you collect more.\n There are also space police enemies roaming around and they put you to a direct stop if you get in contact with them. There's also a star powerup which will collect all the energy of the color you are when you collide with it.\n The game is intended to be played with the custom made controllet, but is also playable with keyboard a keyboard.",
        images: [
          {
            src: "/soft-coded/xenon/Image1.png",
            label: "The main menu",
          },
          {
            src: "/soft-coded/xenon/Image2.png",
            label: "The level",
          },
          {
            src: "/soft-coded/xenon/Image4.png",
            label: "The logo of super xenon galaxy",
          },
        ],
      },
      {
        blockType: 3,
        title: "Custom controller",
        text: "One of the main aspects of the game is it's unique controller. It has 5 buttons on it, one white button used to select and 4 colored buttons around it to change the color of your spaceship.\n We couldn't get a joystick from the free box available so we came up with a different approach for movement; A nunchuck. The nunchuk had a long wire from the center of the motherboard and contained a thumbstick. You can put this in either hand or even lend it out to a friend to play together.\n The controller ran on an arduino and we were able to get a direct communication between the arduino and our game, where as most other teams made the arduino work as an keyboard emulator. Because of this communication we were able to change the lights on the controller based on where the player was in the game. The select button lit up whenever the player was able to pick up a energy. A small animation would also play if the game was idling.",
        images: [
          {
            src: "/soft-coded/xenon/controller.jpeg",
            label: "The custom made controller",
            portraitSide: true,
          },
          {
            src: "/soft-coded/xenon/controller.gif",
            label: "The custom made controller being used",
          },
          {
            src: "/soft-coded/xenon/nunchuk.gif",
            label: "The nunchuk being used",
          },
        ],
      },
      {
        blockType: 6,
        title: "Images",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non ante nibh. Sed malesuada magna a risus congue pretium. Vivamus ullamcorper elementum risus, in luctus magna commodo non. Nullam eget sem rhoncus, aliquet diam non, commodo est. Donec id nunc nec erat consectetur rhoncus at non leo. Aliquam sit amet nisl rutrum, maximus dolor et, molestie neque. Nullam ultricies congue nisl faucibus fringilla. Curabitur tincidunt lacinia consequat. Aenean bibendum euismod mi et euismod. Etiam dictum elit non interdum rhoncus. Phasellus luctus sagittis eros ac vulputate. Vivamus convallis tortor ut ante imperdiet sodales. Pellentesque auctor felis non laoreet eleifend. Sed ut massa sed augue sollicitudin tincidunt. Nulla ultricies at magna a faucibus. Quisque sit amet elit in nibh mattis rutrum. Etiam a quam pellentesque, placerat velit ac, pulvinar erat. Donec orci eros, interdum auctor neque eget, elementum lacinia turpis. Mauris nibh nibh, consectetur quis interdum rutrum, fringilla quis leo. Phasellus convallis dictum odio, nec fermentum sem aliquet in. Sed fringilla turpis orci, a placerat mauris euismod eget. Suspendisse a tempus magna.",
        gallery: {
          images: [
            {
              src: "/soft-coded/xenon/Image3.png",
              label: "Once the game finishes you can insert your name with the score in the leaderboard. You can choose 3 characters by moving to a letter and selecting it.",
              showLabel: true,
            },
            {
              src: "/soft-coded/xenon/poster.png",
              label: "A arcade poster made for super xenon galaxy",
            },
            {
              src: "/soft-coded/xenon/ArcadeBoxSide.png",
              label: "Concept art of how the side of the arcade box would look like if we were able to customize the full sized one.",
            },
            
          ],
        }
      },
      {
        blockType: 7,
        title: "Trailer",
        text: "",
        video: "/soft-coded/xenon/superxenongalaxytrailer-1.mp4",
      },
      {
        blockType: 7,
        title: "Playthrough video",
        text: "",
        video: "/soft-coded/xenon/Xenon Galaxy Gameplay.mov",
      },
    ],
  },
  {
    id: 1,
    name: "Tetris",
    logo: false,
    slug: "Tetris",
    usp: "Tetris is the same Tetris game as everyone knows, but in this version the levels are shaped in patterns making it harder (or easier) to play.",
    description: "A full on remake of the famous tetris game made in the home engine from CMGT saxion. It contains features such as saving a shape for later, instant dropping, increasing difficulty over time, rotation in to empty spaces and even custom levels designed via the flexible level editor 'Tiled'!",
    github: "https://github.com/Koen-H/Tetris",
    date: '27-01-2022',
    imageurl: ["/soft-coded/tetris/Image1.png", "/soft-coded/tetris/Image2.png", "/soft-coded/tetris/Image3.png", "/soft-coded/tetris/Image4.png"],
    videourl: "/soft-coded/tetris/movie.mkv",
    projectCategories: [
      'Games',
    ],
    background: {
      css: false,
      video: false,
      images: [
        "/soft-coded/tetris/background.jpg",
      ],
      headerOverlay: "linear-gradient(rgba(0, 0, 0,0)80%, rgba(0, 0, 0,0.4) 100%)",
      overlay: "rgba(0, 0, 0,0.4)"
    },
    css: {
      textColor: "white",
    },
    pageContent: [
      {
        blockType: 4,
        title: "Tiled level implementation",
        text: "For the assignment, there were some big bonus points if you got the Tiled level editor implemented in the game. I managed to make quite a decent framework for the game itself that it allowed me to create interesting shaped levels.\n In tetris when a row dissapears all blocks fall down by the amount of rows that dissapeared. jowever, since I was using custom shapes it happens that a block will be floating in the air.",
        images: [
          {
            src: "/soft-coded/tetris/tiled.png",
            label: "Level 4, in tiled",
          },
          {
            src: "/soft-coded/tetris/Levels/level4.png",
            label: "The logo on top of the underwater scene",
          },
        ],
      },
      {
        blockType: 6,
        title: "Levels",
        gallery: {
          images: [
            {
              src: "/soft-coded/tetris/Levels/level1.png",
              label: "Level one of tetris",
            },
            {
              src: "/soft-coded/tetris/Levels/level2.png",
              label: "Level two of tetris",
            },
            {
              src: "/soft-coded/tetris/Levels/level3.png",
              label: "Level three of tetris",
            },
            {
              src: "/soft-coded/tetris/Levels/level4.png",
              label: "Level four of tetris",
            },
            {
              src: "/soft-coded/tetris/Levels/level5.png",
              label: "Level five of tetris",
            },
          ],
        }
      },
      {
        blockType: 7,
        title: "Classic level playthrough",
        text: "",
        video: "/soft-coded/tetris/Videos/TetrisClassic.mp4",
      },
      {
        blockType: 7,
        title: "Level 2 and 4 playthrough",
        text: "",
        video: "/soft-coded/tetris/Videos/TetrisLevel4and2.mov",
      },
    ],
  },
  {
    id: 2,
    name: "The Rolling cones",
    logo: "/soft-coded/xenon/logo.png",
    slug: "The-Rolling-Cones",
    usp: "In The Rolling Cones, you roll around as a pinecone, place objects around the level to reach new areas and solve puzzles.",
    description: "",
    github: "",
    date: '12-05-2022',
    imageurl: ["/soft-coded/cones/image1.png", "/soft-coded/cones/image2.png", "/soft-coded/cones/image3.png", "/soft-coded/cones/image4.png"],
    videourl: "/soft-coded/cones/Trailercones.mp4",
    projectCategories: [
      'Games',
    ],
    background: {
      css: false,
      video: false,
      images: false,
      headerOverlay: "linear-gradient(rgba(0, 0, 0,0)80%, rgba(0, 0, 0,0.4) 100%)",
      overlay: "rgba(0, 0, 0,0.4)"
    },
    css: {
      textColor: "white",
    },
    pageContent: [
      {
        blockType: 2,
        title: "Collect and match!",
        text: "",
        images: [
          {
            src: "/soft-coded/xenon/Image4.png",
            label: "The logo on top of the underwater scene",
          },
        ],
      },

    ],
  },
  {
    id: 3,
    name: "Sea of Debris",
    logo: "/soft-coded/sea/logo.png",
    slug: "Sea-of-Debris",
    usp: "The sea is full of junk, plastic is everywhere. In this fun VR experience it's your job to clean up the ocean!",
    description: "Sea of Debris is a game made for a school project where we had 3 weeks to make a game for a charity and encourage the players to donate towards the charity. Our charity was TeamSeas where every $1 donated is one less pound of trash in the ocean. We developed a VR game based on the donation system where the player plays as the person cleaning up the ocean, hopefully evoking an emotional response to the huge amount of trash they get to clean up in the ocean.",
    github: "https://github.com/Koen-H/My-project-URP-test",
    date: '23-09-2022',
    imageurl: ["/soft-coded/sea/Image1.png", "/soft-coded/sea/Image2.gif", "/soft-coded/sea/Image3.gif", "/soft-coded/sea/Image4.png"],
    videourl: "/soft-coded/sea/TrailerAE_V3.mp4",
    projectCategories: [
      'Games', 'Virtual Reality'
    ],
    background: {
      css: "linear-gradient(69.5deg, rgb(40, 48, 68) 2.3%, rgb(1, 179, 201) 97.6%)",
      video: "/soft-coded/sea/videos/Seaofdebrisbackground.mp4",
      videoLoop: true,
      disableFullScreen: true,
      images: false,
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
            src: "/soft-coded/sea/vacuum.gif",
            label: "Vacuum shooting",
          },
        ],
      },
      {
        blockType: 3,
        title: "Retrievable hook",
        text: "In the other hand you have the retrievable hook, it's not as important as the vacuum cleaner as you can finish the game without it. However, it will help you get a higher score as you will be able to pull items closer to you that the vacuum cleaner can't reach.\n The first step is to shoot it out just like a gun, if it misses it comes back without any plastic. If it manages to hit something it will stick to the plastic until a pull back motion is made on the left hand.",
        images: [
          {
            src: "/soft-coded/sea/LeftHandTutorial.png",
            label: "The tutorial explaing the left hand",
          },
          {
            src: "/soft-coded/sea/hookused.gif",
            label: "The hook being used",
          },
        ],
      },
      {
        blockType: 4,
        title: "Scoring points",
        text: "Once you set the vacuum cleaner in the blowing mode it will become a gun and you can shoot out the trash in the correct trash can.\n There are 3 different types of trash and it's recognizable by the background color of the item displayed on the vacuum. Mismatching the trash with the incorrect cargo container results in the container throwing back the trash in to the ocean. If you do it correctly and fast enough there will be bonus points awareded at the end of the game.",
        images: [
          {
            src: "/soft-coded/sea/vacuumShooting.gif",
            label: "Vacuum shooting",
          },
          {
            src: "/soft-coded/sea/aiming.png",
            label: "Marks that show how to recognize where the next trash should be.",
          },
          {
            src: "/soft-coded/sea/EndScore.png",
            label: "The end screen that shows how your score is determined",
          },
         
        ],
      },
      {
        blockType: 0,
        title: "Emotional attachment",
        text: "",
        innerBlocks: [
          {
            blockType: 4,
            title: "Save the turtle!",
            text: "We decided to add a turtle to the game that will circle around the player slowly gathering trash on its body. If the turtles has too much trash collected it will die.\n During testing we noticed that most people didn't care about it and just laughed when it was 'sleeping upside down on the ground' or even shooted it for fun... We kept the shooting at the turtle in as it can also be seen as an obstacle for when you are trying to shoot the trash in the submarine but also added bonus points to the score if the player manages to keep the turtle alive till the end of the game.",
            images: [
              {
                src: "/soft-coded/sea/turtle.png",
                label: "The logo on top of the underwater scene",
              },
            ],
          },
          {
            blockType: 4,
            title: "The sea is dirty",
            text: "To further attach emotional value to the game we made the ocean dynamic, based on the amount of trash in the ocean it would slowly darken the ocean and make the water green. If the player does a good job at cleaning the ocean the water will slowly change to it's original state.",
            images: [
              {
                src: "/soft-coded/sea/CleanOcean.png",
                label: "The ocean, clean",
              },
              {
                src: "/soft-coded/sea/oceanlildirty.png",
                label: "The ocean, a little dirty",
              },
              {
                src: "/soft-coded/sea/oceanverydirty.png",
                label: "The ocean very dirty",
              },
              
              {
                src: "/soft-coded/sea/DirtyOcean.png",
                label: "The ocean, dirty",
              },
            ],
          }
        ],
      },
      {
        blockType: 7,
        title: "Trailer",
        text: "This trailer was made with the campaing in mind, the gameplay is a bit outdated compared with the final.",
        video: "/soft-coded/sea/TrailerAE_V3.mp4",
      },
      {
        blockType: 7,
        title: "Playthrough video",
        text: "Gameplay recorded on a standalone quest 3 headset with capped 72fps.",
        video: "/soft-coded/sea/Videos/Seaofdebris Walkthrough.mp4",
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
      <ScrollTop />
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
