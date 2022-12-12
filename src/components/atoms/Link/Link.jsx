const classNames = require('classnames/dedupe');

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