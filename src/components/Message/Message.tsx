import React, { Component } from 'react'
import { IMessage } from '../../module'

interface IMessageProps {
  message: IMessage,
  onDelete: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

export default class Message extends Component<IMessageProps, {}> {

  render() {
    return (
      <div className='message-wrapper'>
        <div className='message-content'>{this.props.message.content}</div>
        <button id={this.props.message.id} onClick={this.props.onDelete} className='delete-btn'></button>
      </div>
    )
  }
}
