import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './state/reducer';
import TicTacToe from './components/TicTacToe/TicTacToe';

let store = createStore(reducer);

function App () {

  return (
    <Provider store={store}>
      <TicTacToe />
    </Provider>
  )
}

export default App;