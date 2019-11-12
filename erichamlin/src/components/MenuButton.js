import React, { Component } from 'react';
import {switchPageActionWithDispatch} from '../actions.js';

export default class MenuButton extends Component {
  render() {
    return (
      <button onClick={() => switchPageActionWithDispatch(this.props.selection)}>{this.props.selection}</button>
    )
  }
}
