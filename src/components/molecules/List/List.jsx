const classNames = require('classnames');

export default function List(props) {
  const { children, className, ...restProps } = props
  const classes = classNames({[(className + '__list')]: className});
  return (
    <ul className={`list ${classes}`} {...restProps}>{children}</ul>
  )
}