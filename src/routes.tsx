import { createBrowserRouter } from 'react-router-dom';
import GameLayout from './layout/GameLayout';
import Dashboard from './Dashboard';
import AvalonGame from './games/avalon/Avalon';

const routes = createBrowserRouter([
  {
    element: <GameLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'games/avalon',
        element: <AvalonGame />,
      },
    ],
  },
]);

export default routes;
