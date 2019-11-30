import React, { Component, useState } from 'react';
import store from '../store.js';

import { Provider } from 'react-redux';
import MainMenu from './MainMenu.js';
import MainBody from './MainBody.js';
import Animations from './Animations.js';
import Lightbox from './EricLightbox';



export default function App()  {

  const openPiece = (images) => {
    setLightboxImages(images);
    setLightboxOpen(true);
  };

  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState([]);

  return (
      <Provider store={store}>
        <div className="App">
            <div id='header'>
            <div id="signature"/>
            <div id="name">Eric Hamlin</div>
            <MainMenu/>
          </div>
          <MainBody onClickThumbnail={(images) => openPiece(images)}/>
          <Lightbox
            currentImageIndex={currentImageIndex}
            setCurrentIndex={setCurrentIndex}
            isOpen={isLightboxOpen}
            onClose={() => setLightboxOpen(false)}
            images={lightboxImages}
            title="whambo"
            description="flooblebar"
          />
        </div>
        <Animations/>
        </Provider>
    );
}
