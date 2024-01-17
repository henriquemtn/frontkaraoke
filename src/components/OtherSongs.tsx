interface CustomProps {
    music: string,
    artist: string,
    usuario: string,
}

export default function OtherSong({ music, artist, usuario }: CustomProps) {
    return (
        <>
            <div className="flex justify-between items-center p-2 w-full h-[101.75px]">
                <div className="flex flex-col">
                    <h1 className="text-white">{music}</h1>
                    <h1 className="text-[#424262]  font-medium">{artist}</h1>
                </div>
                <div>
                    <h1 className="text-[#424262] font-medium">{usuario}</h1>
                </div>
            </div>
            <div className='h-[1px] w-full bg-[#1C1C2E]' />
        </>
    )
}
