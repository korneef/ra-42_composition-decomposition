import { Header, Link, List, ListItem, Icon } from '../../index';
import { broadcastData } from '../../../data/data';
import classNames from 'classnames';

/**
 * Элемент Broadcasts возвращает заголовок и ненумерованый список. 
 * В ненумерованный список необхдимо передавть массив объектов содержащих ключи title, channelName.
 * В элемент key передано значение index массива только для исключения предупреждения React, в реальном проекте следует передавать в key уникальное значение.
 */

export default function Broadcasts({ className }) {
  const elementClassName = 'broadcasts'
  const classes = classNames({[className + '__element']: className}, elementClassName);
      
  return (
    <div className={classes}>
      <Header className={elementClassName} header>Эфир</Header>
      <List>
        {broadcastData.map((item, index) => {
          return (
            <ListItem key={index} className={elementClassName}>
              <Link className={elementClassName} link='#'>
                <Icon src='icons/media-play.png'/>
                <span className={`${elementClassName}__list-element-title`}>{item.title}</span>
                <span className={`${elementClassName}__list-element-chanel-name`}>{item.channelName}</span>
              </Link>
            </ListItem>
          )
        })}
      </List>
    </div>
  )
}
