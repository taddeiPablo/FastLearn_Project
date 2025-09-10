import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

function SideBar({ user }) {
    const navigate = useNavigate();

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        navigate('/');
    };

    return (
        <>
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-lg flex flex-col items-center py-8 px-4">
                <img
                    src={user?.avatar}
                    alt="Avatar usuario"
                    className="w-24 h-24 rounded-full mb-4 border-4 border-blue-200"
                />
                <h2 className="text-lg font-bold text-gray-800 mb-1">{user?.name}</h2>
                <p className="text-sm text-gray-500 mb-6">{user?.email}</p>
                <nav className="w-full">
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="block py-2 px-4 rounded hover:bg-blue-50 text-blue-700 font-medium">Editar perfil</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-4 rounded hover:bg-blue-50 text-blue-700 font-medium">Crear curso nuevo</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-4 rounded hover:bg-blue-50 text-blue-700 font-medium">Mis cursos</a>
                        </li>
                        <li>
                            <button onClick={handleSignOut} className="block py-2 px-4 rounded hover:bg-blue-50 text-blue-700 font-medium">Cerrar sesión</button>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    );
}

export { SideBar };