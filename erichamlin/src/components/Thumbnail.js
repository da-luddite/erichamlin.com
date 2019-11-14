import React, { Component } from 'react';

function Thumbnail(props) {
  return (
      <img src={props.src} class='thumbnail'/>
  );
}

export default Thumbnail;
