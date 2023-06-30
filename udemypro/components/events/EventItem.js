import Link from "next/link";
import styles from 'styles/event-item.module.css'


function EventItem (props) {

const {title,location,description,date,image,id}=props.event



const readyDate= new Date(date).toLocaleDateString('en-US',{
    day: 'numeric',
    month:'long',
    year:'numeric'
})

const exploreLink=  `/events/${id}`;

  return (
    <li className={styles.item} key={id}>
        <img src={'/'+image} alt={title} />
        <div className={styles.content}>
          <div className={styles.summary}>
            <h2>{title}</h2>
          </div>
          <div className={styles.address}>
            <h4>{location}</h4>
          </div>
          <div className={styles.date}>
            <h4>{readyDate}</h4>
            </div>
            <div className={styles.actions}>
                <Link href={exploreLink}>Explore</Link>
            </div>
        </div>
    </li>
  )
}

export default EventItem
