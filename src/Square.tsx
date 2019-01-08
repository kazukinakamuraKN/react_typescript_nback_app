import * as React from 'react'

class Square extends React.Component {

  public style = {
    background: '#FFF',
    border: 'solid 3px #6091d3',
    borderRadius: '10px',
    color: '#6091d3',
    fontWeight: 700,
    height: '50px',
    margin: '10px',
    width: '50px',
  }

  public render() {
    return (
      <div style={this.style} />
    )
  }
}

export default Square