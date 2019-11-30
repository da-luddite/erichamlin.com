import React, { Component } from 'react';

function Thumbnail(props) {
  const handleClick = () => { props.onClick(props.piece); };

  return (
      <div class='thumbnail' onClick={handleClick}><img src={props.piece.thumbnail.url}/>{props.piece.title}</div>
  );
}

export default Thumbnail;
