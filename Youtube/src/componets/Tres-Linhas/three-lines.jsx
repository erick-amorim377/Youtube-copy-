import PropTypes from 'prop-types'
import React, { Component } from 'react';
import './three-lines.css'


export class tresLinhas extends Component {
  static propTypes = {}

  render() {
    return (
    <div>
      <button className='buttonOption'>  
          <div className='linhas'></div>
          <div className='linhas'></div>
          <div className='linhas'></div>
      </button>


    </div>
    )
  }
}

export default tresLinhas