import React, { Component } from 'react';

class DisplayComponent extends Component {
  render() {
    return (
      <div className='card'>
      <div className='card-body'>
      <h6 className='card-subtitle'> Your Message : </h6>
      <h4 className='card-text' >{this.props.sayWhat}</h4>
      </div>
      < /div>
    );
  }
}
export default DisplayComponent;
