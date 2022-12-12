import { Header, Link, List, ListItem } from '../../index';
import { tvData } from '../../../data/data';
import classNames from 'classnames';

/**
 * Элемент TVProgram возвращает ненумерованый список ТВ программ. 
 * В ненумерованный список необхдимо передавть массив объектов содержащих ключи time, programName и channelName.
 * В элемент key передано значение index массива только для исключения предупреждения React, в реальном проекте следует передавать в key уникальное значение.
 */

export default function TVProgram({ className }) {
  const elementClassName = 'tv-program';
  const classes = classNames({[className + '__element']: className}, elementClassName);

  return (
    <div className={classes}>
      <Header className={elementClassName} header>Телепрограмма</Header>
      <List>
        {tvData.map((item, index) => {
          return (
            <ListItem key={index} className={elementClassName}>
              <Link className={elementClassName} link='#'>
                <span className={`${elementClassName}__list-element-time`}>{item.time}</span>
                <span className={`${elementClassName}__list-element-title`}>{item.programName}</span>
                <span className={`${elementClassName}__list-element-tv-program-name`}>{item.channelName}</span>
              </Link>
            </ListItem>
          )
        })}
      </List>
    </div>
  )
}
