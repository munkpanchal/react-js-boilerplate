import { createBrowserRouter } from 'react-router';
import ProtectedPage from '../pages/protected/ProtectedPage';
import Homepage from '../pages/public/Homepage';
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';

const routes = createBrowserRouter([
    {
        element: <PublicRoutes />,
        children: [
            {
                path: '/',
                element: <Homepage />,
            },
        ],
    },
    {
        element: <ProtectedRoutes />,
        children: [
            {
                path: '/protected',
                element: <ProtectedPage />,
            },
        ],
    },
]);

export default routes;
