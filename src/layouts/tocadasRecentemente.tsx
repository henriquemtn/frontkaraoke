import useHouseData from "../api/useHouseData";
import Lista from "../components/Lista";

interface Song {
  title: string;
  musicGenre: string;
  album: string;
  artist: string;
}

interface HouseData {
  previousSongs: Song[];
}

export default function TocadasRecentemente() {
    const houseData = useHouseData() as HouseData | null;

  return (
    <div className='flex flex-col'>
      <div className='flex justify-between py-2'>
        <h1 className="font-medium">Tocadas Recentemente</h1>
        <h1 className='text-[#5B00CF] font-medium'>Ver todas</h1>
      </div>
      <div className='h-[1px] w-full bg-[#DFDFE7]' />
      {houseData && houseData.previousSongs.map((song, index) => (
        <Lista
          key={index}
          id={`#${index + 1}`}
          label={song.musicGenre}
          music={song.title}
          artist={song.artist}
        />
      ))}
    </div>
  )
}
