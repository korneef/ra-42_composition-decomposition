import { Header, Link, List, ListItem } from '../../index';
import { mapData } from '../../../data/data';
import classNames from 'classnames';

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