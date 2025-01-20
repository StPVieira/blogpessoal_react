import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
    
    const navigate = useNavigate();

    const { handleLogout } = useContext(AuthContext)

    function logout() {

        handleLogout()
        alert('O Usuário foi desconectado com sucesso!')
        navigate('/')
    }    
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-cyan-600 text-white'>
            
                <div className="container flex justify-between text-lg font-bold">
                    <span className="text-2xl font-bold text-white">
                        <Link to="/home"> Blog Pessoal </Link>
                    </span>

                    <div className='flex gap-4'>
                        <button className="px-4 py-2 bg-indigo-950 text-white rounded shadow hover:bg-blue-600">
                        Postagens
                        </button>

                        <button className="px-4 py-2 bg-indigo-950  text-white rounded shadow hover:bg-blue-600">
                        <Link to='/temas'>Temas</Link>
                        </button>

                        <button className="px-4 py-2 bg-indigo-950  text-white rounded shadow hover:bg-blue-600">
                        <Link to='/cadastrartema'>Cadastrar tema</Link>
                        </button>

                        <button className="px-4 py-2 bg-indigo-950  text-white rounded shadow hover:bg-blue-600">
                        Perfil
                        </button>

                        <button className="px-4 py-2 bg-indigo-950  text-white rounded shadow hover:bg-blue-600">
                        <Link to='' onClick={logout}>Sair</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar