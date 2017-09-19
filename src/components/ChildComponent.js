import React, { Component } from 'react';

class ChildComponent extends Component {
  render() {
    return (
        <div>
          <button onClick={this.props.onClick} type="submit">Submit< /button>
      </div>
    );
  }
}

export default ChildComponent;
