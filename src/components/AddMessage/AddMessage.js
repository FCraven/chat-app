import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addMessage } from '../../redux/actions'

const AddMessageComponent =(props)=> {
  let input

  return (
    <section id='new-message'>
      <input
        onKeyPress={
          (e)=> {
            if(e.key === 'Enter') {
              props.dispatch(input.value, 'Me')
              input.value = ''
            }
          }
        }
        type='text'
        ref={(node) => {
          input = node
        }}
      />

    </section>
  )
}

AddMessageComponent.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapDispatch= dispatch => ({
  dispatch: (message,author) => {
    dispatch(addMessage(message, author))
  }
})

const AddMessage = connect(null, mapDispatch)(AddMessageComponent)

export default AddMessage;

