import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-indigo-900 text-white'>

                <div className="container flex justify-between px-2 font-semibold text-2xl">
                    <Link to='/home' className='hover:underline'>Farmacia</Link>

                    <div className='flex gap-4 px-2'>
                        <Link to='/' className='hover:underline'>Produtos</Link>
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categoria</Link>
                        <Link to='/' className='hover:underline'>Sair</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar