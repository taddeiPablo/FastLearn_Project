import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";


function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [session_signup, setSession_signup] = useState(null);
    
    useEffect(() => {
        if(session_signup?.user){
            const timer = setTimeout(() => {
                navigate("/login");
            }, 2000);   
            return () => clearTimeout(timer);
        }else{
            navigate("/signup");
        }
    }, [navigate, session_signup?.user]);

    const handlerSubmit = async (e) => {
        e.preventDefault();
        try {
            const cleanEmail = email.trim();
            const cleanPassword = password.trim();  

            if (!cleanEmail || !cleanPassword) {
                alert("Email y contraseña son obligatorios");
                return;
            }
            // registro de nuevo usuario
            let { data, error } = await supabase.auth.signUp({
                email: cleanEmail,
                password: cleanPassword,
            });
            // si hubo algun error en el proceso de signup se captura el error y se muestra en un alert
            if (error) throw error;
            setSession_signup(data);
            alert("SE REGISTRO CORRECTAMENTE, REVISE SU EMAIL PARA VERIFICAR LA CUENTA");
        } catch (error) {
            alert(error);
        }
    }
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="w-full max-w-xs">
                    <h5 className="text-gray-700 text-sm font-bold mb-2 text-center">Registrarse</h5>
                    <form onSubmit={handlerSubmit}
                        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label 
                                class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Email
                            </label>
                            <input 
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="email" 
                                type="text" 
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}>
                            </input>
                        </div>
                        <div className="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Password
                            </label>
                            <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                                    id="password" 
                                    type="password" 
                                    placeholder="******************"
                                    onChange={(e) => setPassword(e.target.value)}>        
                            </input>
                            <p class="text-red-500 text-xs italic">Please choose a password.</p>
                        </div>
                        <div class="flex items-center justify-between">
                            <button 
                                onClick={() => {}} 
                                className="px-3 py-2 bg-blue-600 text-white rounded-lg"
                            >
                                Registrarse
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Signup;