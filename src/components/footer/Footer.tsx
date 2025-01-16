import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';

function Footer() {
    const data = new Date().getFullYear();

    return (
        <>
            <footer className="bg-blue-950 text-white">
                <div className="container flex flex-col items-center py-6 gap-4">
                    {/* Texto principal */}
                    <p className="text-xl font-bold text-center drop-shadow-md">
                        Blog Pessoal Generation | Copyright: {data}
                    </p>

                    {/* Subtítulo */}
                    <p className="text-lg font-light text-center">
                        Acesse nossas redes sociais
                    </p>

                    {/* Ícones das redes sociais */}
                    <div className="flex gap-4">
                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-300 transition-all duration-300"
                        >
                            <LinkedinLogo size={48} weight="bold" />
                        </a>
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-400 transition-all duration-300"
                        >
                            <InstagramLogo size={48} weight="bold" />
                        </a>
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 transition-all duration-300"
                        >
                            <FacebookLogo size={48} weight="bold" />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
