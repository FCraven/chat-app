import { connect } from 'react-redux'
import { AddMessage } from '../components '
import { addMessage } from '../redux/actions'

const mapDispatch= dispatch => ({
  dispatch: (message,author) => {
    dispatch(addMessage(message, author))
  }
})

export default connect((null, mapDispatch)(AddMessage))
