import React, { Component } from 'react';

import SideMenu from './SideMenu.js';
import ContentArea from './ContentArea.js';

export default class MainBody extends Component {
  render() {
    return (
      <div>
      <SideMenu/>
      <ContentArea/>
      </div>
    );
  }
}
