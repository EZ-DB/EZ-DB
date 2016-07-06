import React, { Component, PropTypes } from 'react';

class TeamChatMessage extends Component {
  constructor(props) {
    super(props);
    console.log('message', this.props.message);
  }

  render() {
    return (
      <li>
        <div className="message-data message">
          <span className="message-data-name"><i className="fa fa-circle online"></i> User: {this.props.message.user_id}</span>
          <span className="message-data-time">{this.props.message.date_entered}</span>
        </div>
        <div className="message my-message">{this.props.message.message}</div>
      </li>
    );
  }
}

export default TeamChatMessage;
