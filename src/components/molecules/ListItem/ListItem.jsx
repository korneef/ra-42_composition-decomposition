const classNames = require('classnames');

export default function ListElement(props) {
  const { children, className, ...restProps } = props
  const classes = classNames('list-element', {[className + '__list-element']: className})
  return (
    <li className={classes} {...restProps}>{children}</li>
  )
}