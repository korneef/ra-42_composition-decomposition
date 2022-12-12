import { Link, List, ListItem } from '../../index';
import { searchItemsData } from '../../../data/data';

export default function SearchPanel(props) {
  const className = 'search-panel'

  return (
    <div className={className}>
      <List className={className}>
        {searchItemsData.map((item, index) => {
          return (
            <ListItem className={className}>
              <Link className={className} link={item.link} header>{item.item}</Link>
            </ListItem>
          )
        })}
      </List>
      <form className={`${className}__search-form`}>
        <input type="text" className={`${className}__search-input`}/>
        <button type="button" className={`${className}__search-button`}>Найти</button>
      </form>
    </div>
  )
}