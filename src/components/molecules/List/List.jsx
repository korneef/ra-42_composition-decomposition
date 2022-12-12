const classNames = require('classnames');

/**
 * Элемент List возвращает ненумерованный список ul. 
 * В props.children необходимо передать эелементы ListItem.
 * Модифицирует родительский класс добавление подстроки '__list'
 */

export default function List(props) {
  const { children, className, ...restProps } = props
  const classes = classNames({[(className + '__list')]: className});
  return (
    <ul className={`list ${classes}`} {...restProps}>{children}</ul>
  )
}