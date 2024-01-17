interface CustomProps {
    id: string,
    label: string,
    music?: string,
    artist?: string,
}
export default function Lista({id, label, music, artist}: CustomProps) {
    return (
        <>
            <div className="flex justify-between py-1">
                <h1>{id}</h1>
                <h1>{label}</h1>
                <h1>{music}</h1>
                <h1>{artist}</h1>
            </div>
            <div className='h-[1px] w-full bg-[#DFDFE7]' />
        </>
    )
}
