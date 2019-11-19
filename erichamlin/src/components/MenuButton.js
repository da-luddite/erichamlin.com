import React, { Component } from 'react';
import {switchPageActionWithDispatch} from '../actions.js';

export default class MenuButton extends Component {
  render() {
    return (
      <a onClick={() => switchPageActionWithDispatch(this.props.selection)}>{this.props.selection}</a>
    )
  }
}
