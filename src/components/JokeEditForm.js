// Example from Lecture
function withBlue(ComponentToWrap) {

  class WrappedComponent extends React.Component {
    render() {
      return <ComponentToWrap color="blue" {...this.props} />;
    }
  }

  return WrappedComponent
}

const BlueNavbar = withBlue(Navbar)
const BlueHeader = withBlue(Header)
//---------------------------------------------------------------------------
import { Provider, connect } from 'react-redux'

const store = createStore(reducer)

const reducer = oldState = {count: 0}, action) => {
  switch (action.type)
    case "INCREMENT":
      return {count: state.count + 1}
    case "DECREMENT":
      return {count: state.count - 1}
    default:
      oldState
  }  
}

const mapStateToProps = state => {
  return {
    count: state.count
  }
}

const withCount = connect(mapStateToProps)

const ConnectedCounter = withCount(Counter)

export default connect(mapStateToProps)(Counter)

//In App.js

render() {
  return(
    <Provider store={store}>
      <ConnectedCounter />
    </Provider>
  )
}
