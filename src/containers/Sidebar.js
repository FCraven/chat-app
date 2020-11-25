import { connect } from 'react-redux'
import { Sidebar} from '../components '


export default connect(state=> ({users: state.users}),{})(Sidebar)

