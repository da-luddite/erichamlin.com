import React, { Component } from 'react';

function Thumbnail(props) {
  return (
      <div class='thumbnail'><img src={props.src}/>{props.title}</div>
  );
}

export default Thumbnail;
