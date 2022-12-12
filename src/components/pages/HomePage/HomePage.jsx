import { News, ExchangeRate, Visited, Broadcasts, TVProgram, Map, SearchPanel, Weather } from '../../index';


export default function HomePage(props) {
  const className = 'lists-container'

  return (
    <>
      <div className='wrapper'>
        <News />
        <ExchangeRate />
        <SearchPanel />
        <div className='lists-container'>
          <Weather className={className} />
          <Visited className={className} />
          <Map className={className} />
          <TVProgram className={className} />
          <Broadcasts className={className} />
        </div>
      </div>
    </>
  )
}