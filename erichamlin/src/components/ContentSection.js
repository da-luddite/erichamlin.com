import React, { Component } from 'react';
import Thumbnail from './Thumbnail.js';
import Divider from './Divider.js';

function ContentSection(props) {
  let content = [];
  for (let i in props.pieces) {
    content.push(<Thumbnail title={props.pieces[i].title} src={props.pieces[i].thumbnail.url}/>);
  }

  return (
    <div id={"content-section-" + props.sectionIndex} class='content-section'>
      <Divider title={props.title}/>
      {content}
    </div>
  );
}

export default ContentSection;
