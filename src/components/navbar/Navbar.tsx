function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-cyan-600 text-white'>
            
                <div className="container flex justify-between text-lg font-bold">
                    <span className="text-2xl font-bold text-white">
                        Blog Pessoal
                    </span>

                    <div className='flex gap-4'>
                        <button className="px-4 py-2 bg-indigo-950 text-white rounded shadow hover:bg-blue-600">
                        Postagens
                        </button>

                        <button className="px-4 py-2 bg-indigo-950  text-white rounded shadow hover:bg-blue-600">
                        Temas
                        </button>

                        <button className="px-4 py-2 bg-indigo-950  text-white rounded shadow hover:bg-blue-600">
                        Cadastrar tema
                        </button>

                        <button className="px-4 py-2 bg-indigo-950  text-white rounded shadow hover:bg-blue-600">
                        Perfil
                        </button>

                        <button className="px-4 py-2 bg-indigo-950  text-white rounded shadow hover:bg-blue-600">
                        Sair
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar