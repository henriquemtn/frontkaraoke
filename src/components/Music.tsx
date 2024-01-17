import Button from "./Button";

interface CustomProps {
    title: string,
    artist: string,
    onclick: () => {},
}

export default function Music({ title, artist, onclick }: CustomProps) {
    return (
        <>
            <div className="w-full flex justify-between items-center py-2">
                <div className="w-3/4 font-medium text-white">
                    <h1>{title}</h1>
                    <h1 className="text-[#424262]">{artist}</h1>
                </div>
                <div className="w-1/4">
                    <Button
                        outline
                        color="white"
                        label="+"
                        onClick={onclick}
                    />
                </div>
            </div>
            <div className='h-[1px] w-full bg-[#1C1C2E]' />
        </>
    )
}
