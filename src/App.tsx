import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router';
import routes from './routes/routes';

function App() {
    return (
        <>
            <RouterProvider router={routes} />
            <Toaster
                position="top-center"
                toastOptions={{
                    duration: 4000,
                }}
            />
        </>
    );
}

export default App;
