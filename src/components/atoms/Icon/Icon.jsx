export default function Icon(props) {
  const { newsCreator, alt, src, ...restProps } = props
  return (
    <img src={src} {...restProps} alt={alt} className='icon' />
  )
}
