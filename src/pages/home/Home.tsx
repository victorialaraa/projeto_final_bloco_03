
function Home() {
    return (
        <>
            <div className="bg-green-200 flex justify-center">
                <div className='container grid grid-cols-2 text-black'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vindo!
                        </h2>
                        <p className='text-xl'>
                            Encontre aqui os melhores produtos e medicamentos
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-black 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                Encontre aqui
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://ik.imagekit.io/viclaraa/bcfe86a6a3bb51ab2454fb9be2ac6305.jpg?updatedAt=1737991359678"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home