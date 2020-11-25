import { connect } from 'react-redux'
import { MessagesList } from '../components '


export default connect(state=> ({messages: state.messages}),{})(MessagesList)

