import { Link } from '../../index';
const classNames = require('classnames');

export default function Header(props) {
  const { children, className, ...restProps } = props;
  const classes = classNames({[className]: className});
  return (
    <h2 className={`element-header ${classes}`}><Link link='#' className={classes} {...restProps}>{children}</Link></h2>
  )
}