import { useLastFM } from 'use-last-fm'
import Song from "../assets/img/song.webp";
const CurrentlyPlaying = () => {
  const lastFM = useLastFM('amineprojet', '62816987eec5933a0fad21657ab72e57')

  if (lastFM.status !== 'playing') {
    return (
      <>
      <div class="flex items-center justify-center h-20 pt-1 pb-1 pr-4 pl-4 transition duration-300 transform rounded-lg shadow-xl text-blurple-discord-50 bg-black-discord-50 border-l-2 border-black-specific-discord-50">
        <img class="h-10 w-10 rounded-md space-x-3 border border-blurple-discord-50" src={Song} alt="Song" />
          <div class="flex flex-col pl-2">
            <span class="text-xs md:text-xs 2xl:text-sm text-white font-medium space-y-1">Not listening to anything</span>
        </div>
      </div>
      </>
    )
  }

  return (
    <>
    <div class="flex items-center justify-center h-24 p-3 transition duration-300 transform rounded-lg shadow-xl text-blurple-discord-50 bg-black-discord-50 border-l-2 border-green-discord-50">
      <img class="h-16 w-16 rounded-md space-x-3 border border-blurple-discord-50" src={lastFM.song.art} alt={lastFM.song.artist} />
        <div class="flex flex-col pl-2">
          <span class="text-xs md:text-xs 2xl:text-sm text-white font-medium space-y-3">Listening to {lastFM.song.name}</span>
          <span class="text-xs md:text-xs 2xl:text-sm text-blurple-discord-50 font-medium space-y-1">by {lastFM.song.artist}</span>
      </div>
      </div>
    </>
  )
};
export default CurrentlyPlaying;