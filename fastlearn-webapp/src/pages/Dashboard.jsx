/*import { useNavigate } from 'react-router-dom';*/
import { useState, useEffect } from "react";
import { supabase } from '../lib/supabaseClient';
import { SideBar } from '../components/Sidebar';

function Dashboard() {

    // Datos ficticios de usuario
    // aqui proceder a llamar a los datos del profile del usuario logueado
    const user = {
        name: "Juan Pérez",
        email: "juan.perez@email.com",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    };

    return (
        <div className="min-h-screen bg-gray-100 flex">
            <SideBar user={user} />
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