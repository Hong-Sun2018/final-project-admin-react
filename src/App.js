import RouterProvider from './RouterProvider';
import { Provider as StoreProvider } from 'react-redux';
import store from './Redux/Store';
import Layout from './Layout/Layout';

function App() {
  return (
    <>
      <StoreProvider store={store}>
        <Layout>
          <RouterProvider />
        </Layout> 
      </StoreProvider>
    </> 
  );
}

export default App;
