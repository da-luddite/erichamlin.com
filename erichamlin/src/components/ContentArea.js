import React, { Component } from 'react';
import { connect } from 'react-redux';
import Thumbnail from './Thumbnail.js';

function ContentArea(props) {

  if (props.pieces===undefined) {
    return (<div></div>);
  }
  else if (props.page==='new') {
    let content = [];
    const pieces = props.dateIndex.map((idx) => props.pieces[idx]);

    for (let i in pieces) {
      content.push(<Thumbnail src={pieces[i].thumbnail.url} />);
    }
    return (
      < div >{
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
      < div >{
        content
      }< / div >
    )
  }
  else {
    return (
      < div > Content < / div >
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
