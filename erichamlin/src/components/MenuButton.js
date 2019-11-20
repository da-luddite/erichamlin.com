import React, { Component } from 'react';
import {switchPageActionWithDispatch} from '../actions.js';

export default class MenuButton extends Component {
  render() {
    let selection = this.props.selection;
    return (
      <a onClick={() => switchPageActionWithDispatch(selection)}>{selection.charAt(0).toUpperCase() + selection.substring(1)}</a>
    )
  }
}
