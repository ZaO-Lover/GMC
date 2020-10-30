import React from 'react';
import '../App.css';
import MessageComponent from './MessageComponent'

function ChatBox(props: any) {

  return (
    <div className="ChatBox">
      {
          props.messages !== undefined &&
          props.messages.map((message:any, index:Number) => {
              return <MessageComponent message={message} key={index}>
              </MessageComponent>
          })
      }
    </div>
  );
}

export default ChatBox;
