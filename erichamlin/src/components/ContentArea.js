import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentSection from './ContentSection.js';


function ContentArea(props) {

  if (props.pieces===undefined) {
    return (<div id='content-area'></div>);
  }

  else if (props.page==='new') {
    return contentAreaNew(props);
  }

  else if (props.page==='categories') {
    return contentAreaCategories(props);
  }

  else {
    return contentAreaBio(props)
  }
}

function contentAreaNew(props) {
  let content = [];
  const pieces = props.dateIndex.map((idx) => props.pieces[idx]);

  let sectionIndex = 0;
  let currentYear = 0;
  let sectionPieces = [];
  for (let i in pieces) {
    let timestamp = pieces[i].dateCreated;
    let dateCreated = new Date();
    dateCreated.setTime(timestamp);
    if (dateCreated.getFullYear() != currentYear) {
      if (currentYear!==0) {
        content.push(<ContentSection title={currentYear} pieces={sectionPieces} sectionIndex={sectionIndex} onClickThumbnail={props.onClickThumbnail}/>);
        sectionIndex++;
      }
      sectionPieces = [];
    }
    sectionPieces.push(pieces[i]);
    currentYear = dateCreated.getFullYear();
  }
  content.push(<ContentSection title={currentYear} pieces={sectionPieces} sectionIndex={sectionIndex} onClickThumbnail={props.onClickThumbnail}/>);
  return (
    <div id='content-area'>{
      content
    }
    </div>
  )
}

function contentAreaCategories(props) {
  const pieces = props.categoryIndex.map((idx) => props.pieces[idx]);
  let content = [];
  let category = null;
  let sectionIndex = 0;
  let sectionPieces = [];
  for (let i in pieces) {
    //if (pieces[i].)
  }
  return (
    <div id='content-area' >{
      content
    }</div>
  )
}

function contentAreaBio(props) {
  return (
    < div id='content-area' > Coming Soon (Should not be taken as an indication that I haven't been born yet.) </div>
  )
}

export default connect((state) => {
  return {
    pieces: state.storePieces.pieces,
    dateIndex: state.storePieces.dateIndex,
    categoryIndex: state.storePieces.categoryIndex,
    categories: state.storePieces.categories,
    page: state.switchPage.page
  }
})(ContentArea);
