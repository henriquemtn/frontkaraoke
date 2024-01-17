import imagem from '../../images/hero.png'
import Button from '../Button';

export default function Hero() {

    const containerStyle = {
        background: `url(${imagem}) center/cover`,
    };

    return (
        <div className="pt-[95px] h-[568px] w-full" style={containerStyle}   >
            <div className="p-20">
                <h1 className="text-5xl font-bold max-w-[390px] text-white">Gerenciador para o seu Karaoke</h1>
                <p className="pt-4 text-[#E3E3E3]">Um aplicativo criado para gerenciar seu Karaoke de uma forma prática.</p>
                <div className='flex w-[500px] pt-4 gap-4 pb-20'>
                    <Button outline color='roxo' onClick={() => { }} label='Contatar' />
                    <Button outline onClick={() => { }} label='Como funciona?' />
                </div>
            </div>
        </div>
    )
}
