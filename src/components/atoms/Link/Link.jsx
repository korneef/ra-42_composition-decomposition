const classNames = require('classnames/dedupe');

/**
 * Элемент Link возвращает ссылку и используется практически во всех элементов списка.
 * Модифицирует класс переданный в props добавлением подстроки '-link'
 */

export default function Link(props) {
  const { className, children, link, header, ...restProps } = props;
  const classes = classNames(
    {
      [`${className}-link`]: className,
      'header-link': header
    }
  )
  return (
    <a href={link} className={`element-link ${classes}`} {...restProps}>{children}</a>
  )
}