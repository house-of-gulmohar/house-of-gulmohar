import { Provider } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import { SettingsProvider } from './context/SettingsContext';
import AppLayout from './layout/AppLayout/AppLayout';
import { store } from './redux/store';
import AllPages from './routes/routes';

function App() {
  const allPages = useRoutes(AllPages());
  return (
    <SettingsProvider>
      <Provider store={store}>
        <AppLayout>{allPages}</AppLayout>
      </Provider>
    </SettingsProvider>
  );
}

export default App;
