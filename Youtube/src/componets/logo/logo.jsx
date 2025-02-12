import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './indexlogo.css';
import YoutubeLogo from "./assets/youtubelogo.png"

export class logo extends Component {
  static propTypes = {}

  render() {
    return (
        <div className='logo'>
            <img src={YoutubeLogo} ></img>
    
        </div>
        
    )
  }
}

export default logo