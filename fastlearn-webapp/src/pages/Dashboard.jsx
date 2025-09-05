


function Dashboard() {
    // Datos ficticios de usuario
    const user = {
        name: "Juan Pérez",
        email: "juan.perez@email.com",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    };

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-lg flex flex-col items-center py-8 px-4">
                <img
                    src={user.avatar}
                    alt="Avatar usuario"
                    className="w-24 h-24 rounded-full mb-4 border-4 border-blue-200"
                />
                <h2 className="text-lg font-bold text-gray-800 mb-1">{user.name}</h2>
                <p className="text-sm text-gray-500 mb-6">{user.email}</p>
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
                            <a href="#" className="block py-2 px-4 rounded hover:bg-blue-50 text-blue-700 font-medium">Cerrar sesión</a>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Contenido principal */}
            <main className="flex-1 p-6">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold mb-6 text-gray-800">Bienvenido al Dashboard</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {/* Tarjeta 1 */}
                        <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center">
                            <span className="text-2xl font-semibold text-blue-600">12</span>
                            <span className="text-gray-500 mt-2">Cursos activos</span>
                        </div>
                        {/* Tarjeta 2 */}
                        <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center">
                            <span className="text-2xl font-semibold text-green-600">5</span>
                            <span className="text-gray-500 mt-2">Tareas pendientes</span>
                        </div>
                        {/* Tarjeta 3 */}
                        <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center">
                            <span className="text-2xl font-semibold text-purple-600">98%</span>
                            <span className="text-gray-500 mt-2">Progreso general</span>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-lg p-6">
                        <h2 className="text-xl font-bold mb-4 text-gray-700">Resumen rápido</h2>
                        <ul className="list-disc pl-6 text-gray-600">
                            <li>Última actividad: hace 2 horas</li>
                            <li>Próxima clase: Matemáticas - 10/09/2025</li>
                            <li>Mensajes nuevos: 3</li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;