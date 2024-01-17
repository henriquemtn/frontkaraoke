import { useLoginModal } from "../hooks/useLoginModal";

export default function Navbar() {
    const loginModal = useLoginModal();

    const handleLoginClick = () => {
        loginModal.onOpen();
    };

    return (
        <div className='text-white h-[125px] w-full fixed top-0'>
            <div className='flex justify-between items-center w-full px-20 h-full'>
                <div className="text-xl font-bold w-[300px]">
                    <h1>MyKaraoke</h1>
                </div>
                <div className="text-xl">
                    <menu className="flex gap-8">
                        <li className="cursor-pointer hover:text-[#5B00CF] duration-200">Sobre</li>
                        <li className="cursor-pointer hover:text-[#5B00CF] duration-200">Serviços</li>
                        <li className="cursor-pointer hover:text-[#5B00CF] duration-200">Meu Karaoke</li>
                        <li className="cursor-pointer hover:text-[#5B00CF] duration-200">Contato</li>
                    </menu>
                </div>
                <div onClick={handleLoginClick}>
                    <h1 className="pl-20 text-xl cursor-pointer hover:text-[#5B00CF] duration-200">Entrar / Criar conta</h1>
                </div>
            </div>
        </div>
    )
}
