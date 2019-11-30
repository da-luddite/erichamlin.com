import React, { Component } from 'react';

function Thumbnail(props) {
  const handleClick = () => {
    const images = props.piece.images.map((image) => {
      return {
        src: image.url,
        alt: image.description,
        caption: image.description
      }
    });
    props.onClick(images);
  };

  return (
      <div class='thumbnail' onClick={handleClick}><img src={props.piece.thumbnail.url}/>{props.piece.title}</div>
  );
}

export default Thumbnail;
