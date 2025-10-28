import { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router';
import ProtectedLayout from '../components/layouts/ProtectedLayout';
import Loading from '../components/shared/Loading';

const ProtectedRoutes = () => {
    const { user, isLoading } = { user: null, isLoading: false };
    const location = useLocation();
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        setIsTransitioning(true);
        const timer = setTimeout(() => {
            setIsTransitioning(false);
        }, 500);
        return () => clearTimeout(timer);
    }, [location.pathname]);

    if (isLoading || isTransitioning) {
        return <Loading />;
    }

    if (!user) {
        return <Navigate to="/" replace />;
    }

    return (
        <ProtectedLayout>
            <Outlet />
        </ProtectedLayout>
    );
};

export default ProtectedRoutes;
