import { Provider } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import { store } from './redux/store';
import AllPages from './routes/routes';

function App() {
  const allPages = useRoutes(AllPages());
  return (
    <Provider store={store}>
      <div>{allPages}</div>
    </Provider>
  );
}

export default App;
