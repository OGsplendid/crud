import React, { Component } from 'react'

export interface IInputProps {
  content: string,
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
}

export default class Input extends Component<IInputProps, {}> {
  render() {
    return (
      <form onSubmit={this.props.onSubmit} className='input-form'>
        <label htmlFor='input'>New Note</label>
        <textarea onChange={this.props.onChange} className='input' id='input' value={this.props.content}></textarea>
        <button className='send-btn' type='submit'></button>
      </form>
    )
  }
}
