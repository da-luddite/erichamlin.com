import React, { Component } from 'react';
import Thumbnail from './Thumbnail.js';
import Divider from './Divider.js';

function ContentSection(props) {
  let content;
  if (props.children) {
    content = props.children;
  } else {
    content = [];
    for (let i in props.pieces) {
      let piece = props.pieces[i];
      content.push(<Thumbnail piece={piece} onClick={props.onClickThumbnail}/>);
    }
  }

  return (
    <div id={"content-section-" + props.sectionIndex} class='content-section'>
      <Divider title={props.title}/>
      {content}
    </div>
  );
}

export default ContentSection;
