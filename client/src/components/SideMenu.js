import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Scroll from 'react-scroll';

let Link = Scroll.Link;

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
        {menuItems.map((item, idx) => { return <div><Link activeClass="active" to={"content-section-" + idx} offset={-300} spy={true} smooth={true}>{item}</Link></div>} )}
      </div>
    )
  }

  else if (props.page === 'categories') {
    let menuItems = [];
    for (let idx in props.categories) {
      menuItems.push(props.categories[idx].categoryName);
    }
    return (
      <div id='side-menu'>
      { menuItems.map((item, idx)  => { return <div><Link activeClass="active" to={"content-section-" + idx} offset={-300} spy={true} smooth={true}>{item}</Link></div> } )}
      </div>
    )
  }

  else {
    return (
      <div id='side-menu'>
        <div><Link activeClass="active" to={"content-section-bio"} offset={-300} spy={true} smooth={true}>Bio</Link></div>
        <div><Link activeClass="active" to={"content-section-statement"} offset={-300} spy={true} smooth={true}>Statement</Link></div>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    pieces: state.storePieces.pieces,
    dateIndex: state.storePieces.dateIndex,
    categoryIndex: state.storePieces.categoryIndex,
    categories: state.storeCategories.categories,
    page: state.switchPage.page
  }
})(SideMenu);
