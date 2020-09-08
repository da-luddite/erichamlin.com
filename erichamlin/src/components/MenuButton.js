import React, { Component } from 'react';
import {switchPageActionWithDispatch} from '../actions.js';
import { constants } from '../constants';

export default class MenuButton extends Component {
  render() {
    let selection = this.props.selection;
    return (
      <a onClick={() => switchPageActionWithDispatch(selection)}>{constants[selection]}</a>
    )
  }
}
