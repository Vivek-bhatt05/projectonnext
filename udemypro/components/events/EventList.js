import EventItem from "./EventItem"
import styles from 'styles/event-list.module.css'


function EventList (props)  {

    const {items}=props
    // console.log(items)

  return (
    <ul className='event-item' >
        {items.map(item=> <EventItem event={item} key={item.id} />) }
    </ul>
  )
}

export default EventList
