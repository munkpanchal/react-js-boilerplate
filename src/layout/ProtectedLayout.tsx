import { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router';

import Loader from '../components/shared/Loader';

const ProtectedLayout: React.FC = () => {
    const token = false;
    const location = useLocation();
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        setIsTransitioning(true);
        const timer = setTimeout(() => {
            setIsTransitioning(false);
        }, 500);
        return () => clearTimeout(timer);
    }, [location.pathname]);

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return (
        <>
            {isTransitioning && <Loader />}
            {<Outlet />}
        </>
    );
};

export default ProtectedLayout;
