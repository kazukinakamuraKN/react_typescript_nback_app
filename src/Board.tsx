import * as React from 'react'

interface MyProps {
  value?: string
}

interface MyState {
  style: {}
}

class Board extends React.Component<MyProps,MyState> {

  public gridContainer = {
    display:'grid',
    gridTemplateColumns: '70px 70px 70px',
    gridTemplateRows: '70px 70px 70px',
  }

  constructor(props: MyProps) {
    super(props)
    this.state = {
      style: {
        background: '#FFF',
        // backgroundColor: '#6091d3',
        border: 'solid 3px #6091d3',
        borderRadius: '10px',
        color: '#6091d3',
        fontWeight: 700,
        height: '50px',
        margin: 'auto',
        width: '50px',
      }
    }
  }

  public render() {
    return (
      <div style={this.gridContainer}>
        <div/>
        <button style={this.state.style}/>
        <div/>
        <button style={this.state.style}/>
        <div/>
        <button style={this.state.style}/>
        <div/>
        <button style={this.state.style}/>
        <div/>
      </div>
    )
  }
}

export default Board