import React, {useState } from 'react';
import '../App.css';

function MessageComponent(props: any) {
  const [message] = useState(props.message);

  return (
    <div className={"Message " + (message.senderType === 'agent' ? "AgentMessage" : "UserMessage")}>
      {
        message.contentType === 'text' &&
        <p className="content">{message.content.text}</p>
      }
      {
        message.contentType === 'image' &&
        <img alt="content" className="content" src={message.content.url} />
      }
      {
        message.contentType === 'attachment' &&
        <button onClick={() => {window.open(message.content.file);}} className="btn content"><i className="fa fa-download"></i> Download</button>
      }
      {
        <p className="createdAt">{require('dateformat')(new Date(message.createdAt), "mmm dS yyyy h:MM TT")}</p>
      }
    </div>
  );
}

export default MessageComponent;
