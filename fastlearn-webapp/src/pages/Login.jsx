import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [session, setSession] = useState(null);  
    
    useEffect(() => {
        const getSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setSession(session);
        };
        getSession();
        
        if (session?.user) {
            navigate("/dashboard"); 
        }else{
            navigate("/login"); // aca deberia redirigir hacia el login si no esta logueado
        }
    }, [navigate,  session?.user]);

    const handlerSubmit = async (e) => {
        e.preventDefault();
        try {
            let { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });
            // aqui tengo el access token para trabajar despues
            console.log("DATA:");
            console.log(data);
            if (error) throw error;
        } catch (error) {
            alert(error);
        }
    }
    
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="w-full max-w-xs">
                    <h5 className="text-gray-700 text-sm font-bold mb-2 text-center">Ingresar</h5>
                    <form onSubmit={handlerSubmit}
                        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Email
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
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
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;