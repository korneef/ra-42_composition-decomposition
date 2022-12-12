import { ListItem, List } from '../../index';
import { exchangeData } from '../../../data/data';

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