import React from 'react';
import '../App.css';
import MessageComponent from './MessageComponent'
import {MessageType} from '../interface/MessageType';

function ChatBox(props: any) {

  return (
    <div className="ChatBox">
      {
          props.messages !== undefined &&
          props.messages.map((message:MessageType, index:number) => {
              return <MessageComponent message={message} key={index}>
              </MessageComponent>
          })
      }
    </div>
  );
}

export default ChatBox;
