interface CustomProps {
    label: string,
}

export default function SituationBar({label}: CustomProps) {
    return (
        <div className="w-full h-[60px] bg-orange-300 fixed top-0 justify-center flex items-center z-20">
            <div className='flex gap-2'>
                <h1 className='text-white font-medium'>{label}</h1>
                <a className="text-white underline" href="/a">Clique aqui para regularizar</a>
            </div>
        </div>
    )
}
