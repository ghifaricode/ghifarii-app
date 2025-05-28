import { Outlet } from 'react-router-dom';
import GuestHeader from '../components/GuestHeader';
import GuestFooter from '../components/GuestFooter';

export default function GuestLayout() {
    return (
        <>
            <GuestHeader />
            <main>
                <Outlet />
            </main>
            <GuestFooter />
        </>
    );
}