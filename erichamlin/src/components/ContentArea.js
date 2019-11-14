import React, { Component } from 'react';
import { connect } from 'react-redux';
import Thumbnail from './Thumbnail.js';
import Divider from './Divider.js';

function ContentArea(props) {

  if (props.pieces===undefined) {
    return (<div id='content-area'></div>);
  }
  else if (props.page==='new') {
    let content = [];
    const pieces = props.dateIndex.map((idx) => props.pieces[idx]);

    let currentYear = 0;
    for (let i in pieces) {
      let timestamp = pieces[i].dateCreated;
      let dateCreated = new Date();
      dateCreated.setTime(timestamp);
      if (dateCreated.getFullYear() != currentYear) {
        content.push(<Divider title={dateCreated.getFullYear()}/>);
      }
      currentYear = dateCreated.getFullYear();
      content.push(<Thumbnail src={pieces[i].thumbnail.url} />);
    }
    return (
      < div id='content-area' >{
        content
      }< / div >
    )
  }
  else if (props.page==='categories') {
    let content = [];
    const pieces = props.categoryIndex.map((idx) => props.pieces[idx]);
    for (let i in pieces) {
      content.push(<Thumbnail src={pieces[i].thumbnail.url} />);
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
