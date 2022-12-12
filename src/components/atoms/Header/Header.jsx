import { Link } from '../../index';
const classNames = require('classnames');

/**
 * Стандартный заголовок, по умолчанию все заголовки являются ссылками, поэтому внутрь передается элемент Link
 * элемент наследует класс родителя
 */

export default function Header(props) {
  const { children, className, ...restProps } = props;
  const classes = classNames({[className]: className});
  return (
    <h2 className={`element-header ${classes}`}><Link link='#' className={classes} {...restProps}>{children}</Link></h2>
  )
}