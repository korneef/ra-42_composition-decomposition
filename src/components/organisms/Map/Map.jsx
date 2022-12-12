import { Header, Link, List, ListItem } from '../../index';
import { mapData } from '../../../data/data';
import classNames from 'classnames';

/**
 * Элемент Map возвращает ненумерованый список. 
 * В ненумерованный список необхдимо передавть массив объектов содержащих ключ title.
 * В элемент key передано значение index массива только для исключения предупреждения React, в реальном проекте следует передавать в key уникальное значение.
 */

export default function Map({ className }) {
  const elementClassName = 'map'
  const classes = classNames({[className + '__element']: className}, elementClassName);

  return (
    <div className={classes}>
      <Header className={elementClassName} header>Карта Германии</Header>
      <List className={elementClassName}>
        {mapData.map((item,index) => {
          return (
            <ListItem key={index} className={elementClassName}>
              <Link link='#' className={elementClassName}>{item.title}</Link>
            </ListItem>
          )
        })}
      </List>
    </div>
  )
}