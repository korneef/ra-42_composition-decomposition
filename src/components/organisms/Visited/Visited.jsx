import { visitedData } from '../../../data/data';
import { Header, List, ListItem, Link } from '../../index'
import classNames from 'classnames';

export default function Visited({ className }) {
  const elementClassName = 'visited';
  const classes = classNames({[className + '__element']: className}, elementClassName);

  return (
    <div className={classes}>
      <Header className={elementClassName} header>Посещаемое</Header>
      <List className={elementClassName}>
        {visitedData.map((item, index) => {
          return (
            <ListItem key={index} className={elementClassName}>
              <Link link='#'>
                <span className={`${elementClassName}__item-header`}>{item.title}</span>
                <span> — </span>
                <span>{item.content}</span>
              </Link>
            </ListItem>
          )
        })}
      </List>
    </div>
  )
}