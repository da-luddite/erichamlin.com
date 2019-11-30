import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentSection from './ContentSection.js';


function ContentArea(props) {

  if (props.pieces===undefined) {
    return (<div id='content-area'></div>);
  }
  else if (props.page==='new') {
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
          content.push(<ContentSection title={currentYear} pieces={sectionPieces} sectionIndex={sectionIndex}/>);
          sectionIndex++;
        }
        sectionPieces = [];
      }
      sectionPieces.push(pieces[i]);
      currentYear = dateCreated.getFullYear();
    }
    content.push(<ContentSection title={currentYear} pieces={sectionPieces} sectionIndex={sectionIndex}/>);
    return (
      < div id='content-area' >{
        content
      }
      < / div >
    )
  }
  else if (props.page==='categories') {
    let content = [];
    const pieces = props.categoryIndex.map((idx) => props.pieces[idx]);
    for (let i in pieces) {
      //content.push(<Thumbnail src={pieces[i].thumbnail.url} />);
    }
    return (
      < div id='content-area' >{
        content
      }< / div >
    )
  }
  else {
    return (
      < div id='content-area' > Content < / div >
    )
  }
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
