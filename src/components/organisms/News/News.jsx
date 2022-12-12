import { Link, Header, ListItem, List, Icon } from '../../index';
import { newsData } from '../../../data/data';

/**
 * Элемент News возращает заголовок и ненумерованый список новостей. 
 * В ненумерованный список необхдимо передавть массив объектов содержащих ключ title, newscreator, link.
 * В элемент key передано значение index массива только для исключения предупреждения React, в реальном проекте следует передавать в key уникальное значение.
 */

export default function News(props) {
  const className = 'news'
  return (
    <div className={`${className}`}>
      <div className={`${className}__headers-list`}>
        <Header className={`${className}__header`} header>Сейчас в СМИ</Header>
        <Header className={`${className}__second-header`} header>В германии</Header>
        <Header className={`${className}__second-header`} header>Рекомендуем</Header>
      </div>
      <List className={`${className}`}>
        {newsData.map((item, index) => {
          const alt = `${item.newscreator}-icon`
          return (
            <ListItem className={`${className}`} key={index}>
              <Link className={`${className}__list-item`} link={item.link}>
                <Icon src={`icons/newsCreators/${item.newscreator}.png`} newsCreator={item.newscreator} alt={alt} />
                {item.title}
              </Link>
            </ListItem>)
        })}
      </List>
    </div>
  )
}