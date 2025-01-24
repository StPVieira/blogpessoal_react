import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens";
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem";

function Home() {
    const texto = "Inovação Computação Programação Inteligência Artificial Cloud Computing Sustentabilidade Ecologia Reciclagem Cães Gatos Fauna Aventura Estratégia Jogos Animação Filmes Séries Cinema Streaming Efeitos especiais Ação Comédia Suspense Mistério Ficção científica Roteiro Atuação Cinematografia Direção Efeitos visuais Blockbuster Algoritmo Big Data Automação Cybersecurity Blockchain Influenciador Conteúdo Compartilhar Interação Hashtags Feed Story Like Seguidores Postagem Comunidade Reciclagem Floresta Biodiversidade Desmatamento Poluição Energia renovável Clima Aquecimento global Emissões Natureza Extinção Animais Selvagens Reptéis Aquáticos Mamíferos Endêmicos Protetores de animais Fauna Ilustração Personagens Mangá Desenhista Pixel art Estilo de arte Design Criatividade Quadrinhos Cartoons Animação Computadores Robôs Gadgets Tecnologia 5G Realidade Virtual Inteligência artificial";

    return (
        <>
            <div className="bg-sky-800 flex justify-center min-h-[80vh] relative overflow-hidden">
                
                <div className="absolute top-0 left-0 w-full h-full z-0">
                    <div className="grid grid-rows-4 gap-2 animate-marquee">
                        {[...Array(10)].map((_, index) => (
                            <p key={index} className="text-white text-2xl md:text-4xl opacity-10">
                                {texto}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="container grid grid-cols-2 text-white z-10 relative">
                    <div className="flex flex-col gap-4 items-center justify-center py-8">
                        <h2 className="text-5xl font-bold drop-shadow-md">
                            Boas Vindas!
                        </h2>
                        <p className="text-xl font-light text-center max-w-lg">
                            Expresse aqui seus pensamentos e opiniões!
                        </p>

                        <div className="flex justify-around gap-4">
                            <ModalPostagem />
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <img
                            src="https://i.imgur.com/fyfri1v.png"
                            alt="Imagem Página Home"
                            className="w-2/3 max-w-md drop-shadow-lg"
                        />
                    </div>
                </div>
            </div>
            <ListaPostagens />
        </>
    );
}

export default Home;