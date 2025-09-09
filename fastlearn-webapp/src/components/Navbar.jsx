
import { useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        navigate('/');
    };

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FastLearn</span>
                </a>
                <div className="flex items-center space-x-6 rtl:space-x-reverse">
                    {location.pathname === '/' ? (
                        <>
                            <a href="/login" className="text-sm text-gray-500 dark:text-white hover:underline">Sign in</a>
                            <a href="/signup" className="text-sm text-blue-600 dark:text-blue-500 hover:underline">Sign Up</a>
                        </>
                    ) : location.pathname === '/dashboard' ? (
                        <button
                            onClick={handleSignOut}
                            className="text-sm text-red-600 dark:text-red-500 hover:underline"
                        >
                            Salir
                        </button>
                    ) : (location.pathname === '/login' || location.pathname === '/signup') ? (
                        <button
                            onClick={() => navigate('/')}
                            className="text-sm text-gray-500 dark:text-white hover:underline"
                        >
                            Volver
                        </button>
                    ) : null}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;