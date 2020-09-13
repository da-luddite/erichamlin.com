import React, { Component } from 'react';

import SideMenu from './SideMenu.js';
import ContentArea from './ContentArea.js';

export default function MainBody(props) {
  return (
      <div id='main-body'>
      <SideMenu/>
      <ContentArea onClickThumbnail={props.onClickThumbnail} />
      </div>
    );
}
