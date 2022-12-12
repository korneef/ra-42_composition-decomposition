/**
 * Элемент Icon используется для добавления иконок к элементам списков на главной странице
 */

export default function Icon(props) {
  const { newsCreator, alt, src, ...restProps } = props
  return (
    <img src={src} {...restProps} alt={alt} className='icon' />
  )
}
