import React, { Component } from 'react'

export class Clicker extends Component {
  state = {
    totalClicks: 0,
  }
  
  handleClick = () => {
    this.setState(prevState => ({
      totalClicks: prevState.totalClicks + 1
    }))
  }
  
  render() {
    return (
      <div>
        <div>
          <h1>
            total clicks: {this.state.totalClicks}
          </h1>
          <h2 className={this.props.colorChosen}>
            color chosen: {this.props.colorChosen || 'no color chosen'}
          </h2>
        </div>
        <div>
          <button type="button" onClick={this.handleClick}>
            CLICK ME OK
          </button>
        </div>
      </div>
    )
  }
}

export default Clicker


