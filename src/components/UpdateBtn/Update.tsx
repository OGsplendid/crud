import React, { Component } from 'react'

export interface IUpdateProps {
  onUpdate: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

export default class Update extends Component<IUpdateProps, {}> {
  render() {
    return (
      <button onClick={this.props.onUpdate} className='update-btn' type='button'></button>
    )
  }
}
