import React, { Component, useState } from 'react';
import store from '../store.js';

import { Provider } from 'react-redux';
import MainMenu from './MainMenu.js';
import MainBody from './MainBody.js';
import Animations from './Animations.js';
import Lightbox from './EricLightbox';



const images = [{
  src: "https://i.imgur.com/8oNzu0S.png",
  alt: "README.md",
  caption: "Blooble blah",
  width: 2486,
  height: 1469
},
  {
    src:
             "https://timellenberger.com/static/blog-content/dark-mode/win10-dark-mode.jpg",
    alt: "Windows 10 Dark Mode Setting",
    caption: "Windows 10 Dark Mode Setting",
    width: 2848,
    height: 2035
  }];


export default function App()  {

  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentIndex] = useState(0);

  return (
      <Provider store={store}>
        <div className="App">
            <div id='header'>
            <div id="signature"/>
            <div id="name" onClick={() => setLightboxOpen(true)}>Eric Hamlin</div>
            <MainMenu/>
          </div>
          <MainBody/>
          <Lightbox
            currentImageIndex={currentImageIndex}
            setCurrentIndex={setCurrentIndex}
            isOpen={isLightboxOpen}
            onClose={() => setLightboxOpen(false)}
            images={images}
          />
        </div>
        <Animations/>
        </Provider>
    );
}
