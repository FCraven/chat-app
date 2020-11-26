import React from 'react'
import PropTypes from 'prop-types'
import { Message } from '../index'
import { connect } from 'react-redux'

const MessagesListComponent =({messages})=> (
  <section id='messages-list'>
    <ul>
      {messages.map(message => (
        <Message
          key={message.id}
          {...message} />
      ))}
    </ul>
  </section>
)

MessagesListComponent.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    }).isRequired
    ).isRequired
  }


const mapState =state=> ({messages: state.messages})

const MessagesList = connect(mapState, {})(MessagesListComponent)

export default MessagesList;

