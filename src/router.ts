import { createBrowserRouter } from 'react-router';
import { HomePage } from './pages/home.page';
import { Layout } from './components/layout';

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: '/',
        Component: HomePage,
      },
    ]
  },
]);
