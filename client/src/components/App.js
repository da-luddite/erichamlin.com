import React, { Component, useState } from 'react';
import store from '../store.js';

import { Provider } from 'react-redux';
import MainMenu from './MainMenu.js';
import MainBody from './MainBody.js';
import Animations from './Animations.js';
import Lightbox from './EricLightbox';



export default function App()  {


  const openPiece = (piece) => {
    setCurrentIndex(0);
    const images = piece.images.map((image) => {
      return {
        src: image.url,
        alt: image.description,
        caption: image.description
      }
    });

    let description = [];
    if (piece.media) description.push(piece.media);
    if (piece.dimensions) description.push(piece.dimensions);
    if (piece.description) description.push(piece.description);
    setLightboxDescription(description.join("\n"));
    setProject(piece.projectTitle);

    setLightboxTitle(piece.title);
    setLightboxImages(images);
    setLightboxOpen(true);
  };

  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxTitle, setLightboxTitle] = useState("Eric Hamlin");
  const [lightboxDescription, setLightboxDescription] = useState("");
  const [project, setProject] = useState("");

  return (
      <Provider store={store}>
        <div className="App">
            <div id='header'>
            <div id="signature"/>
            <div id="name">Eric Hamlin</div>
            <MainMenu/>
          </div>
          <MainBody onClickThumbnail={(piece) => openPiece(piece)}/>
          <Lightbox
            currentImageIndex={currentImageIndex}
            setCurrentIndex={setCurrentIndex}
            isOpen={isLightboxOpen}
            onClose={() => setLightboxOpen(false)}
            images={lightboxImages}
            project={project}
            title={lightboxTitle}
            description={lightboxDescription}
          />
        </div>
        <Animations/>
        </Provider>
    );
}
