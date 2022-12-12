import { Link, List, ListItem } from '../../index';
import { searchItemsData } from '../../../data/data';

/**
 * Элемент SearchPanel возвращает ненумерованый список категорий и поисковю строку с кнопкой. 
 * В ненумерованный список необхдимо передавть массив объектов содержащих ключи item и link.
 * В элемент key передано значение index массива только для исключения предупреждения React, в реальном проекте следует передавать в key уникальное значение.
 */

export default function SearchPanel(props) {
  const className = 'search-panel'

  return (
    <div className={className}>
      <List className={className}>
        {searchItemsData.map((item, index) => {
          return (
            <ListItem key={index} className={className}>
              <Link className={className} link={item.link} header>{item.item}</Link>
            </ListItem>
          )
        })}
      </List>
      <form className={`${className}__search-form`}>
        <input type="text" className={`${className}__search-input`}/>
        <button type="button" className={`${className}__search-button`}>Найти</button>
      </form>
    </div>
  )
}