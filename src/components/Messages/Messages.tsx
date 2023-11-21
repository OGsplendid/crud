import React, { Component } from 'react'
import Message from '../Message/Message';
import { IMessage } from '../../module';

export interface IMessagesProps {
  messages: IMessage[],
  onDelete: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

export default class Messages extends Component<IMessagesProps, {}> {

  render() {
    return (
      <div className='messages-wrapper'>
        {this.props.messages.map(message => (
            <Message onDelete={this.props.onDelete} message={message} />
        ))}
      </div>
    )
  }
}
