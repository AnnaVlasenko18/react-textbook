import { Layout } from './Layout/Layout';
import { AppBar } from './AppBar/AppBar';
import { TaskForm } from './TasckForm/TasckForm';
import { TaskList } from './TasckList/TasckList';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <AppBar />
        <TaskForm />
        <TaskList />
      </Layout>
    </Provider>
  );
};
