import React, { useState, useEffect } from 'react';
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
import CreateProjectPage from './pages/CreateProjectPage';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectPage from './components/js/ProjectPage';
import MediaSelect from './components/js/mediaSelect';

//TODO: Import from a database
const jsonProjects = [
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
    logo: "",
    slug: "The-Rolling-Cones",
    usp: "In the physics game, The Rolling Cones, you roll around as a pinecone, place objects around the level to reach new areas and solve puzzles.",
    description: "In The Rolling Cones you play as a pinecone, use your round bottom half and rough top half to conquer the snowy areas and return the treasures you lost!\nYou will have access to a number of items, but beware! You can only use these items in the designated areas, so use them wisely.\nOnce you have finished the game for the first time you can replay it again using the golden play button to try and complete each level in new and faster ways.",
    github: "",
    date: '12-05-2022',
    imageurl: ["/soft-coded/cones/background.png", "/soft-coded/cones/image2.png", "/soft-coded/cones/image3.png", "/soft-coded/cones/image4.png"],
    videourl: "/soft-coded/cones/Trailercones.mp4",
    projectCategories: [
      'Games',
    ],
    background: {
      css: "linear-gradient(0deg,rgb(85 100 213) 21.3%, rgb(1 201 118) 97.6%)",
      video: false,
      images: ["/soft-coded/cones/background.png"],
      headerOverlay: "linear-gradient(rgba(0, 0, 0,0)80%, rgba(0, 0, 0,0.4) 100%)",
      overlay: "rgba(0, 0, 0,0.4)"
    },
    css: {
      textColor: "white",
    },
    pageContent: [
      {
        blockType: 2,
        title: "Physics based puzzling",
        text: "The main goal is to reach the end of the level, it's a shiny silver coin. To reach the coin you can utlize 3 different items that can affect the physics of the cone. These items can only be placed within certain area's where the aurora allows it.\n The first item you unlock is the geyser. Once you roll on to the geyser it will boost you up towards the sky allowing for vertical movement.\n The second item is the aurora field and it drags you towards it's center. It can be used to gain a speed boost or change the direction you go!\n The final item is the slingbush. When entering the slingbush you can shoot yourself in to a direction! However, you need to time it wisely as your aim goes up and down.\n As a pinecone you can also widen your spikes to glide further.\n Once you manage to finish the game you'll unlock newGame+ and it unlock all the items from the start allowing you to find new and faster ways to finish the levels.",
        images: [
          {
            src: "/soft-coded/cones/infographic.jpg",
            label: "The 3 different items available",
          },
        ],
      },
      {
        blockType: 6,
        title: "Mechanics",
        gallery: {
          images: [
            {
              src: "/soft-coded/cones/widecones.png",
              label: "Widen your spikes to glide further.",
              showLabel: true,
            },
            {
              src: "/soft-coded/cones/slingbush.png",
              label: "Use the busshot to sling yourself.",
              showLabel: true,
            },
            {
              src: "/soft-coded/cones/geyser.png",
              label: "Use the geyser to blas yourself to higher areas.",
              showLabel: true,
            },
            {
              src: "/soft-coded/cones/orbitalField.png",
              label: "Use the aurora field to alter gravity and change the direction.",
              showLabel: true,
            },
          ],
        }
      },
      {
        blockType: 2,
        title: "Tiled implementation",
        text: "In my previous tetris project I implemented tiled with the GXP engine. For this project I had to upgrade it further to allow line collisions in our game.\n We had the designer graybox the levels in tiled and made an artist add their art on top of it. This progress was very effective and sped up the progress a lot.\n Left picture shows the level in tiled, the right pictures shows the final result.",
        images: [
          {
            src: "/soft-coded/cones/conesTiled.png",
            label: "Level 2 in tiled",
          },
          {
            src: "/soft-coded/cones/level2.png",
            label: "Level 2 in the game",
          },
        ],
      },
      {
        blockType: 4,
        title: "Merchandise",
        text: "Part of the assignment was to make some merchandise (concepts) for it. We made real life plushies and stickers, alongside various",
        images: [

          {
            src: "/soft-coded/cones/plushy.jpg",
            label: "Level 2 in tiled",
          },
          {
            src: "/soft-coded/cones/stickers.png",
            label: "Level 2 in the game",
          },
        ],
      },
      {
        blockType: 7,
        title: "Trailer",
        text: "",
        video: "/soft-coded/cones/Trailercones.mp4",
      },
      {
        blockType: 7,
        title: "Playthrough",
        text: "",
        video: "/soft-coded/cones/ConePlaythrough.mp4",
      },
    ],
  },
  {
    id: 3,
    featured: true,
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
  },
  {
    id: 4,
    name: "Godot Space Adventure ",
    logo: false,
    slug: "Godot-Space-Adventure",
    usp: "Godot Space Adventure is a 2d platformer and my first experience with Godot",
    description: "Godot Space Adventure is a small 2d platformer game made within godot. This project was my first time with Gdscript and Godot. Within this small platformer adventure you can jump from planets to planets which will change the gravity of the player.",
    github: "https://github.com/Koen-H/Godot-Space-Adventure",
    date: '28-04-2023',
    imageurl: ["/soft-coded/godot-space-adventure/background.png"],
    videourl: "",
    projectCategories: [
      'Games', 'Godot', 'GDScript'
    ],
    background: {
      css: "linear-gradient(69.5deg, rgb(40, 48, 68) 2.3%, rgb(95 95 95) 97.6%)",
      video: false,
      videoLoop: false,
      disableFullScreen: false,
      images: ["/soft-coded/godot-space-adventure/background.png"],
      headerOverlay: "linear-gradient(rgba(0, 0, 0,0)80%, rgba(0, 0, 0,0.4) 100%)",
      overlay: "rgba(0, 0, 0,0.4)"
    },
    css: {
      textColor: "white",
    },
    pageContent: [
      {
        blockType: 2,
        title: "Let’s a godot",
        text: "I’ve heard a lot of good things about godot the last two years and that it might even replace unity,  that was the reason I decided to learn about Godot.\nI’m very familiar with unity so it was time to find out how this game engine worked. By the first glance, it looks like we got an inspector, a scene view. Files are bottom left, console bottom. Not that different from unity. One small (big) problem was that Godot released version 4.0 not that long ago and it has a lot of big differences compared with Godot 3. There came a thought in my mind to change to godot 3 but decided to stick with 4.0 as I didn’t see any real value in learning something outdated. ",
        images: [
          {
            src: "/soft-coded/godot-space-adventure/godotInterface.png",
            label: "Vacuum shooting",
          },
        ],
      },
      {
        blockType: 1,
        title: "Player movement",
        text: "Since the tutorial I was following was godot 3 and I was working in godot 4 I immediately got in a problem where the player node that was used in the tutorial didn’t exist in godot 4 anymore. It has been changed and renamed to Characterbody2d. In godot 4 this already creates a movement script for the player, so I decided to use that instead of the tutorial.\n The tutorial also implemented a camera that will follow the player.  This was easily done using a RemoteTransform2D which basically tells the camera to follow the player.",
      },
      {
        blockType: 4,
        title: "Tilemap",
        text: "In godot it’s really easy (when the option actually appears…) to make a 2d world using the tilemap. The tilemap works incredibly well with a tilesheet. Within the tilemap you can draw out collisions on the physics layer. ",
        images: [
          {
            src: "/soft-coded/godot-space-adventure/drawCollision.png",
            label: "Vacuum shooting",
          },
        ],
      },

      {
        blockType: 3,
        title: "Swimming",
        text: "Within the tilemap I created a second physics layer for water and gave collision to the water. To check collision with the water I couldn’t add the player to the same physics layer as the water as this would allow the player to walk on solid water. I added a child collision to the player that only checks for the water layer. On this child I added a small script that emits two signals, these signals will change a variable in the player indicating that the player is in the water. Within the player phyics loop I added a small if check to see when the player is in the water, allowing the player to jump again (swim) and have decreased gravity on the player.",
        images: [
          {
            src: "/soft-coded/godot-space-adventure/swim.gif",
            label: "Vacuum shooting",
          },
        ],
      },
      {
        blockType: 1,
        title: "Pushing a block",
        text: "Because I wanted to add some kind of puzzle element to the prototype I decided to make a push able block. This became a much harder challenge that I thought it would be, I added a simple box added collision and a rigidbody so it has physics, gravity and all that. But whenever I walked in to it, it didn’t want to push. When I add a second box and throw it against the other one, it works fine… I got so confused by this and played around with a lot of variables. Disabling gravity on the box, didn’t do anything when I walked in to it, but it still works when the other box collides with it…? There were a lot of tutorials but those didn’t help either as they were outdated. One tutorial added velocity to the box when it enters the body of the player. This would make some sense but surely godot should have something like that already in place? After implementing this it worked just fine. However the box couldn’t push me! I decided to re-create the player using the same Rigidbody2d as the box. This didn’t help at all as I’ve lost a lot of player functionality like checking if you are on the ground, against a wall etc. In the end I decided to revert and keep the player a CharacterBody2d as I would like to have these functions and did it by applying velocity manually.",
      },
      {
        blockType: 3,
        title: "Custom gravity",
        text: " Within my game I wanted to have something that changes gravity. I decided to make planets with their own gravity! At first I made it so the gravity is done by the planet. For this I had to make my own on_trigger_stay function as that didn’t exist within godot… After I implemented this successfully I realized that I had to change it so the player handles the gravity (because of overlapping and jumping from planets). Now whenever a player enters the atmosphere the player will keep track of the planet that it entered and changes the gravity based on the direction of origins of the planet and player. For this I had to rewrite my player script to rotate almost every vector within the player based on the gravity direction, because left and right will still be left and right and there is no transform.left or transform.right like unity. ",
        images: [
          {
            src: "/soft-coded/godot-space-adventure/orbitalJump.gif",
            label: "Vacuum shooting",
          },
        ],
      },
      {
        blockType: 2,
        title: "Rope",
        text: "Originally I wanted to create a grappling hook, but after trying a lot of different approaches using tutorials online it just didn't work with the Characterbody2d. I decided to change it to a rope that can be attached to cubes, allowing for an easy way to drag cubes from planet to planet.\n I managed to get a rope working using pinjoints by connecting smaller segments. Now all I need to do is to make it programmatically based on where I hit the my bullets! This took a few iterations to get it right…",
        images: [
          {
            src: "/soft-coded/godot-space-adventure/swim.gif",
            label: "Rope working as inteded",
          },
        ],
      },
      {
        blockType: 6,
        title: "Rope fails",
        gallery: {
          images: [
            {
              src: "/soft-coded/godot-space-adventure/rope1.gif",
              label: "One of the rope attempts",
            },
            {
              src: "/soft-coded/godot-space-adventure/rope2.gif",
              label: "One of the rope attempts",
            },
            {
              src: "/soft-coded/godot-space-adventure/rope5.gif",
              label: "One of the rope attempts",
            },
            {
              src: "/soft-coded/godot-space-adventure/rope6.gif",
              label: "One of the rope attempts",
            },
          ],
        }
      },
      {
        blockType: 3,
        title: "Rope",
        text: "There were a few glitches with the rope causing the boxes to make weird fast movement. I added a maximum stress-length that will cause the rope to break if the length becomes too much. And a different stress-length for when it’s on the bullet.\nThe rope itself has a collider, I had to disable collision between the rope layer and the player layer and between the ropes themselves to make it more of a real rope. After changing the texture, to an actual rope. I’m actually quite proud of the final result.\nOne thing I forgot was that the rope could attach to anything, even the planets… To prevent this I used godot’s groups, now whenever a bullet hits an object we check if it’s in the group “rope-attachable”, if it isn’t we simply cut the rope if it’s attached or don’t create a new rope. Groups in Godot is 99% the same as tags in unity.",
        images: [
          {
            src: "/soft-coded/godot-space-adventure/what.gif",
            label: "Rope working as inteded",
          },
        ],
      },
      {
        blockType: 2,
        title: "Buttons",
        text: "Since I said I would have a bit of a 2d puzzle platformer I would net a button that requires progression!\n The button toggles on when an object enters its collider and toggles back off when an objects leaves the collider. It has two sprites which are just toggling of and on when they have to.\n Now to make the button actually do something, that was pretty simple… By “exporting” variables it’s possible to show variables in the inspector and assign them accordingly.\nNow I use this to disable and enable an atmosphere around a planet. This is were I ran in to an issue with godot… In this gif I disable it programmatically at the start and enable it when the button is pressed. This did work for the sprite but not for the collider. When I turn it of and on again through the inspector it suddenly does work and it was really frustrating.\n To solve it I had to do now.show() and .set_deferred('disabled',false) instead of what it recommended me to do; node.disabled = true",
        images: [
          {
            src: "/soft-coded/godot-space-adventure/ropeAttach.gif",
            label: "Rope working as inteded",
          },
        ],
      },
      {
        blockType: 4,
        title: "Hud, coins and win.",
        text: "My game was lacking one thing: a HUD! I decided to add coins around the level and a HUD that keeps track of the score. I used the same code as the coins to make a quick end-flag that will pop-up a win condition when the player reaches the end.",
        images: [
          {
            src: "/soft-coded/godot-space-adventure/hudshwocase.gif",
            label: "Rope working as inteded",
          },
        ],
      },
      {
        blockType: 7,
        title: "Playthrough video",
        text: "",
        video: "/soft-coded/godot-space-adventure/godotSpaceAdventureWalkthrough.mp4",
      },
    ],
  },
  {
    id: 5,
    name: "Raymarching in Unity ",
    logo: false,
    slug: "Raymarching-in-Unity",
    usp: "Raymarching is a technique used in computer graphics for rendering 3D scenes. It involves casting rays from the camera through each pixel of the screen and marching along the ray until it hits an objects or reaches its distance treshold. ",
    description: "The basic idea behind raymarching is to represent the scene as a mathematical function that takes a point in 3D space as input and returns a distance to the closest surface of the surface. This is done using signed distance functions (SDF), and it can be defined in various ways depending on the geometry of the scene. \n The key advantage of raymarching over other rendering techniques such as rasterization or ray tracing is its ability to handle complex geometry and lighting in a more efficient and flexible way. In particular, raymarching can be used to render scenes that are not easily represented by traditional 3D geometry, such as fractals, volumetric objects and smooth curves. However, it can be more computationally expensive than other techniques, especially for scenes with many objects or complex lighting.",
    github: "https://github.com/Koen-H/Advanced-Tools/wiki",
    date: '28-04-2023',
    imageurl: ["/soft-coded/raymarching-in-unity/mandelbulb.png", "/soft-coded/raymarching-in-unity/hollowedCube.png", "/soft-coded/raymarching-in-unity/raymarch.gif", "/soft-coded/raymarching-in-unity/HollowedCubeInfinite.png", "/soft-coded/raymarching-in-unity/conclusion.png"],
    videourl: "",
    projectCategories: [

    ],
    background: {
      css: "linear-gradient(69.5deg, rgb(40, 48, 68) 2.3%, rgb(95 95 95) 97.6%)",
      video: false,
      videoLoop: false,
      disableFullScreen: false,
      images: ["/soft-coded/raymarching-in-unity/mandelbulb.png"],
      headerOverlay: "linear-gradient(rgba(0, 0, 0,0)80%, rgba(0, 0, 0,0.4) 100%)",
      overlay: "rgba(0, 0, 0,0.4)"
    },
    css: {
      textColor: "white",
    },
    pageContent: [
      {
        blockType: 0,
        innerBlocks: [
          {
            blockType: 4,
            title: "Raymarching and sphere tracing",
            text: " In raymarching we 'march' along the ray until we find the point that intersects with an object. Once the distance to the surface of the object is below zero we have intersected with the object. (Left image)\n As you can see in the left image, the point that intersects with an object is a bit inaccurate, to make it more accurate we can use sphere tracing. Instead of moving the same amount of distance for each point, we use a SDF to get the distance to the closest objects in the scene. This will return a safe distance we can use to march further along the ray without intersecting an object for the next point.\n With sphere tracing we are able to get a way more accurate result and as you can see by the red dots, it required less calculations as well. The accuracy can be set manually by setting the min distance required of what is considered an intersection with the object. Do note that a higher accuracy will make a lot of steps once it gets close to the intersection.",
            images: [
              {
                src: "/soft-coded/raymarching-in-unity/raymarchExplained.png",
                label: "Raymarching visualized",
              },
              {
                src: "/soft-coded/raymarching-in-unity/sphereTracingExplained.png",
                label: "Sphere tracing visualized",
              },

            ],
          },
        ]
      },
      {
        blockType: 1,
        title: "Signed Distance Functions (SDF) and Distance Function Operators",
        text: "Distance functions are mathematical functions that can be used to get the distance between a point in 3D space and a surface or object in that space. In raymarching distance functions are used to render the 3D scenes. After a march a SDF is used to determine the distance with the objects within the scene. SDF can be used to represent a wide variety of objects.\n It's possible to combine multiple SDF together using distance function operators. These Distance function operators are used to measure the distance or similarity between two objects. In the following examples, I showcase my scene which has a box and a sphere where the sphere is one unit higher on the Y axis.",
      },
      {
        blockType: 6,
        title: "Distance function operators in action",
        gallery: {
          images: [
            {
              src: "/soft-coded/raymarching-in-unity/boxsphereSubstraction.gif",
              label: "Substraction operator.",
              showLabel: true,
            },
            {
              src: "/soft-coded/raymarching-in-unity/boxsphereIntersection.gif",
              label: "Intersection operator.",
              showLabel: true,
            },
            {
              src: "/soft-coded/raymarching-in-unity/boxspheresmoothUnion.gif",
              label: "Smooth union operator",
              showLabel: true,
            },
            {
              src: "/soft-coded/raymarching-in-unity/boxspheresmoothSubstraction.gif",
              label: "Smooth substraction operator",
              showLabel: true,
            },
            {
              src: "/soft-coded/raymarching-in-unity/boxspheresmoothIntersection.gif",
              label: "Smooth intersection operator",
              showLabel: true,
            },
          ],
        }
      },
      {
        blockType: 3,
        title: "Testing",
        text: "I'll be testing different geometries rendered with the raymarching shader. Now ofcourse, just one geometry wouldn't provide much of a result, therefore I'll be rendering them multiple times at once. I'll slowly increase the amount of iterations the raymarching shader is allowed and calculate the average fps during that iteration. \n To test this I've made a raymarching shader in unity following this tutorial and have these variables changeable through the inspector.\nI've setup a fps recorder that will be able to track the average fps, which can be tweened to be more accurate based on the amount of seconds each iteration should take. To make the graphs, I've imported a unity package and made a bunch of adjustments to make it fit for my needs.",
        images: [
          {
            src: "/soft-coded/raymarching-in-unity/raymarchingInspector.png",
            label: "Raymarching visualized",
          },
          {
            src: "/soft-coded/raymarching-in-unity/testShowcase.gif",
            label: "Sphere tracing visualized",
          },

        ],
      },
      {
        blockType: 0,
        innerBlocks: [
          {
            blockType: 4,
            title: "Hollowed cube",
            text: "The camera is placed in the direct center of all of them, and we are slowly increases the raymarching iterations treshold by one.",
            images: [
              {
                src: "/soft-coded/raymarching-in-unity/hollowedCube.png",
                label: "Raymarching visualized",
              },
              {
                src: "/soft-coded/raymarching-in-unity/hollowedCubeInside.png",
                label: "Sphere tracing visualized",
              },
              {
                src: "/soft-coded/raymarching-in-unity/hollowedCubeResult.png",
                label: "Raymarching visualized",
              },
              {
                src: "/soft-coded/raymarching-in-unity/hollowedCubeResultZoomedIn.png",
                label: "Raymarching visualized",
              },

            ],
          },
          {
            blockType: 4,
            title: "Smooth Hexagonal Prism",
            text: "One of them is made extremely long to see if the performance changes.",
            images: [
              {
                src: "/soft-coded/raymarching-in-unity/HexagonalPrism.png",
                label: "Raymarching visualized",
              },
              {
                src: "/soft-coded/raymarching-in-unity/HexagonalPrismLong.png",
                label: "Sphere tracing visualized",
              },
              {
                src: "/soft-coded/raymarching-in-unity/HexagonalPrismResult.png",
                label: "Raymarching visualized",
              },
              {
                src: "/soft-coded/raymarching-in-unity/HexagonalPrismLongResult.png",
                label: "Raymarching visualized",
              },

            ],
          },
        ]
      },
      {
        blockType: 0,
        innerBlocks: [
          {
            blockType: 4,
            title: "Thin torus",
            images: [
              {
                src: "/soft-coded/raymarching-in-unity/thinTorus.png",
                label: "Raymarching visualized",
              },
              {
                src: "/soft-coded/raymarching-in-unity/thinTorusResult.png",
                label: "Sphere tracing visualized",
              },
              {
                src: "/soft-coded/raymarching-in-unity/thinTorusResultZoomed.png",
                label: "Sphere tracing visualized",
              },
              {
                src: "/soft-coded/raymarching-in-unity/thinTorusResultZoomedTwo.png",
                label: "Sphere tracing visualized",
              },

            ],
          },
          {
            blockType: 4,
            title: "Simple 3d Box",
            images: [
              {
                src: "/soft-coded/raymarching-in-unity/box.png",
                label: "Raymarching visualized",
              },
              {
                src: "/soft-coded/raymarching-in-unity/boxResult.png",
                label: "Sphere tracing visualized",
              },
              {
                src: "/soft-coded/raymarching-in-unity/boxResultZoomed.png",
                label: "Sphere tracing visualized",
              },
              {
                src: "/soft-coded/raymarching-in-unity/boxResultZoomedTwo.png",
                label: "Sphere tracing visualized",
              },
            ],
          },
        ]
      },

      {
        blockType: 0,
        innerBlocks: [
          {
            blockType: 4,
            title: "Analysing the results",
            text: "At first glance when comparing the graphs, it's quite obvious that there is a heavy drop in fps up till around iteration 20, after that it becomes more stable, yet it still slowly drops in fps for each iteration that comes after. When comparing the zoomed in graph (at 40) from the box with the thin torus it becomes quite clear that the box has a solid 80 frames per second more at 100 iterations. The thin torus is a lot heavier. I decided to do the hollowed box again but this time instead of doing 100 iterations, it goes up to 500. \n This graph has been zoomed in by around 50 iterations, and it becomes quite clear that after 90 iterations it stabilizes at a solid 96fps. I decided to do one last test to see how where the limit of raymarching is, Instead of a 10x10x10 surrounding box, I made it infinite. \n Based on these graphs it becomes really clear where the limit is, in the zoomed in graph you can see at itteration 130 it becomes almost a straight line running smooth 65fps.",
            images: [
              {
                src: "/soft-coded/raymarching-in-unity/HollowedCubeInfinite.png",
                label: "Raymarching visualized",
              },
              {
                src: "/soft-coded/raymarching-in-unity/HollowedCube500.png",
                label: "Sphere tracing visualized",
              },
              {
                src: "/soft-coded/raymarching-in-unity/HollowedCubeInfiniteResult.png",
                label: "Sphere tracing visualized",
              },
              {
                src: "/soft-coded/raymarching-in-unity/HollowedCubeInfiniteResultZoomed.png",
                label: "Sphere tracing visualized",
              },



            ],
          },
          {
            blockType: 4,
            title: "Final Test",
            text: "After making the hollowed cube infinite, I accidently tweaked the ball a little too much resultin in diamon shapes instead of a hollowed box and noticed a huge frame drop. I decided to do one more test based on this geometry which I can already tell, won't get far in iterations while maintaining high fps... \n I've zoomed in the graph to iteration 20, and it becomes very clear very fast that the framerate drops rapidly, on iteration 80it's already on 37fps and it's still dropping...",
            images: [
              {
                src: "/soft-coded/raymarching-in-unity/prism.png",
                label: "Raymarching visualized",
              },
              {
                src: "/soft-coded/raymarching-in-unity/prismResults.png",
                label: "Sphere tracing visualized",
              },

            ],
          },
        ]
      },

      {
        blockType: 4,
        title: "Conclusion",
        text: "The goal of this project was to learn about raymarching shader and how effectively it can render geometries on different itteratation tresholds. After testing the raymarching shader and observing the FPS based on the geometry and iteration treshold, I can conclude that the treshold does not matter that much for simple shapes, such as torus, hollowed cubes and boxes themselves. However in the last example it becomes very clear how much the treshold can affect the framerate, why this is the case is shown below in another beautiful example drawing.",
        images: [
          {
            src: "/soft-coded/raymarching-in-unity/conclusion.png",
            label: "Conclusion of testing visualized",
          },

        ],
      },
    ],
  }
]

function App() {
  const [projects, setProjects] = useState([]);
  //Wether it fetched projects.
  const [fetchedProjects, setfetchedProjects] = useState(false);

  useEffect(() => {
    fetch('https://koenhankel.nl/api/api.php')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data)
        setfetchedProjects(true);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  //While fetching projects, show a loading page
  if (!fetchedProjects) {
    // Loading state, replace this with a loading spinner
    return <div>Loading...</div>;
  }
  const projectPages = jsonProjects.map((project) => (
    <Route
      key={project.id}
      exact
      path={`/project/${project.slug}`}
      element={<ProjectPage project={project} />}
    />
  ));

  return (
    <Router>
      <ScrollTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home projects={jsonProjects} />} />
        {projectPages}
        <Route path="*" element={<ErrorPage />} />
        <Route path="/upload" element={<MediaSelect />} />
        <Route path="/create-project" element={<CreateProjectPage />} />
      </Routes>
      <Footer />
    </Router>
  );

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
