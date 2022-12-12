import { ListItem, List } from '../../index';
import { exchangeData } from '../../../data/data';

/**
 * Элемент ExchangeRate ненумерованый список куросв валют. 
 * В ненумерованный список необхдимо передавть массив объектов содержащих ключи code, value, change, exchangeName(необязательный параметр).
 * В элемент key передано значение index массива только для исключения предупреждения React, в реальном проекте следует передавать в key уникальное значение.
 */

export default function ExchangeRate(props) {
  const className = 'exchange'
  return (
    <div className={className}>
      <List className={`${className}`}>
        {exchangeData.map((item, index) => {
          return (
            <ListItem key={index} className={`${className}`}>
              <span className={`${className}__list-element-valute`}>{`${item.code} ${item.exchangeName ? item.exchangeName.toUpperCase() : ''}`}</span>
              <span className={`${className}__list-element-value`}>{` ${item.value}`}</span>
              <span className={`${className}__list-element-change`}>{` ${item.change > 0 ? `+${item.change}` : item.change}`}</span>
            </ListItem>
          )
        })}
      </List>
    </div>
  )
}