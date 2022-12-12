const classNames = require('classnames');

/**
 * Элемент ListItem возвращает элемент списка li. 
 * В props.children возможно передавать различные элменты.
 * Модифицирует родительский класс добавление подстроки '__list-element'
 */

export default function ListElement(props) {
  const { children, className, ...restProps } = props
  const classes = classNames('list-element', {[className + '__list-element']: className})
  return (
    <li className={classes} {...restProps}>{children}</li>
  )
}