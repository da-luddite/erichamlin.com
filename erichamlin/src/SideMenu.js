import React, { Component } from 'react';
import { connect } from 'react-redux';

function SideMenu(props) {

  if (props.page === 'new') {
    let menuItems = [];
    let currentYear = 0;
    for (let x in props.newIndex) {
      let timestamp = props.pieces[props.newIndex[x]].dateCreated;
      console.log(timestamp)
      let dateCreated = new Date();
      dateCreated.setTime(timestamp);
      console.log(dateCreated);
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

function mappin(state) {
  console.log("mapping");
  return {
    page: state.switchPage.page
  }
}

export default connect((state) => {
  return {
    pieces: state.storePieces.pieces,
    newIndex: state.storePieces.newIndex,
    categoriesIndex: state.storePieces.categoriesIndex,
    page: state.switchPage.page
  }
})(SideMenu);
