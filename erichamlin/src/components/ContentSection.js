import React, { Component } from 'react';
import Thumbnail from './Thumbnail.js';
import Divider from './Divider.js';

function ContentSection(props) {
  let content = [];
  for (let i in props.pieces) {
    let piece = props.pieces[i];
    content.push(<Thumbnail piece={piece}/>);
  }

  return (
    <div id={"content-section-" + props.sectionIndex} class='content-section'>
      <Divider title={props.title}/>
      {content}
    </div>
  );
}

export default ContentSection;
