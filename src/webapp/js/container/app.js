import { connect } from 'react-redux'
import { setLabel } from '../action/hello'
import PanelMessage from '../component/PanelMessage'

const mapStateToProps = (state, ownProps) => ({
    message: state.get('message'),
    label: state.get('label'),
    // handlerClick: () => alert("Button is Clicked")
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    handlerClick: () => dispatch(setLabel('Hello!!'))
});

const App = connect(mapStateToProps, mapDispatchToProps)(PanelMessage);

export default App;
