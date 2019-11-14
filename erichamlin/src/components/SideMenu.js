import React, { Component } from 'react';
import { connect } from 'react-redux';

function SideMenu(props) {

  if (props.pieces===undefined) {
    return (<div id='side-menu'></div>);
  }
  else if (props.page === 'new') {
    let menuItems = [];
    let currentYear = 0;
    const pieces = props.dateIndex.map((idx) => props.pieces[idx]);
    for (let i in pieces) {
      let timestamp = pieces[i].dateCreated;
      let dateCreated = new Date();
      dateCreated.setTime(timestamp);
      if (dateCreated.getFullYear() != currentYear) {
        menuItems.push(dateCreated.getFullYear());
      }
      currentYear = dateCreated.getFullYear();
    }
    return (
      <div id='side-menu'>
        {menuItems.map((item) => { return <div>{item}</div>} )}
      </div>
  )
  }
  else if (props.page === 'categories') {
    let menuItems = [];
    for (let category in props.categories) {
      menuItems.push(category);
    }
    return (
      <div id='side-menu'>
      {menuItems.map((item) => { return <div>{item}</div> })}
      </div>
    )
  }
  else {
    return (
      <div id='side-menu'>nothing here</div>
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
})(SideMenu);
