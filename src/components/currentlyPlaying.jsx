import { useLastFM } from 'use-last-fm'
const CurrentlyPlaying = () => {
  const lastFM = useLastFM('amineprojet', '62816987eec5933a0fad21657ab72e57')

  if (lastFM.status !== 'playing') {
    return (<span class="flex text-xs md:text-xs 2xl:text-sm text-white font-medium">Not listening to anything</span>)
  }

  return (<span class="flex text-xs md:text-xs 2xl:text-sm text-white font-medium">Listening to {lastFM.song.name} by {lastFM.song.artist}</span>)
};
export default CurrentlyPlaying;