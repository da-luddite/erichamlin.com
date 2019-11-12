import React, { Component } from 'react';
import { connect } from 'react-redux';

function SideMenu(props) {

  if (props.page === 'new') {
    let menuItems = [];
    let currentYear = 0;
    for (let x in props.dateIndex) {
      let timestamp = props.pieces[props.dateIndex[x]].dateCreated;
      let dateCreated = new Date();
      dateCreated.setTime(timestamp);
      if (dateCreated.getFullYear() != currentYear) {
        menuItems.push(dateCreated.getFullYear());
      }
      currentYear = dateCreated.getFullYear();
    }
    return (
      <div>
        {menuItems.map((item) => { return <div>{item}</div>} )}
      </div>
  )
  }
  else if (props.page === 'categories') {
    return (
      <div>
      <div>New</div>
      <div>Concept</div>
      <div>etc...</div>
    </div>
  )
  }
  else {
    return (
      <div>nothing here</div>
  )
  }
}

export default connect((state) => {
  return {
    pieces: state.storePieces.pieces,
    dateIndex: state.storePieces.dateIndex,
    categoryIndex: state.storePieces.categoryIndex,
    page: state.switchPage.page
  }
})(SideMenu);
