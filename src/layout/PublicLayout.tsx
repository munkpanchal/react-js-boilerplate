import { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router';

import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import Loader from '../components/shared/Loader';

const PublicLayout: React.FC = () => {
    const token = 'token';
    const location = useLocation();
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        setIsTransitioning(true);
        const timer = setTimeout(() => {
            setIsTransitioning(false);
        }, 500);
        return () => clearTimeout(timer);
    }, [location.pathname]);

    if (token) {
        return <Navigate to="/dashboard" replace />;
    }

    return (
        <>
            {isTransitioning && <Loader />}

            <Header />
            <main className="flex flex-col ">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default PublicLayout;
