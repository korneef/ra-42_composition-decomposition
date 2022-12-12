import { News, ExchangeRate, Visited, Broadcasts, TVProgram, Map, SearchPanel, Weather } from '../../index';

/**
 * Элемент HomePage возвращает страницу готовую для отображения. 
 * Применяются верхнеуровневые стили для позиционирования элементов на странице
 */

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