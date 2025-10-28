import { useAuth } from '@/store/selector/useAuthStore';
import { Navigate, Outlet } from 'react-router';
import Loading from '../components/shared/Loading';

const PublicRoutes = () => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <Loading />;
    }

    if (user) {
        return <Navigate to="/dashboard" replace />;
    }

    return (
        <div>
            <Outlet />
        </div>
    );
};

export default PublicRoutes;
