import { Provider } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import AppLayout from './layout/AppLayout/AppLayout';
import { store } from './redux/store';
import AllPages from './routes/routes';

function App() {
  const allPages = useRoutes(AllPages());
  return (
    <Provider store={store}>
      <AppLayout>{allPages}</AppLayout>
    </Provider>
  );
}

export default App;
