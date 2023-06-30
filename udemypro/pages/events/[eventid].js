import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router"


const Eventid = () => {

  const router =useRouter();

  const eventId= router.query.eventid
  // console.log(eventId)

  const event = getEventById(eventId)

  if(!event){
    return <p>No event</p>
  }

  console.log(event)
  const readyDate= new Date(event.date).toLocaleDateString('en-US',{
    day: 'numeric',
    month:'long',
    year:'numeric'
})
  
  return (
    <li  key={event.id}>
    <img src={'/'+event.image} alt={event.title} />
    <div >
      <div >
        <h2>{event.title}</h2>
      </div>
      <div >
        <h4>{event.location}</h4>
      </div>
      <div>
        <h4>{event.readyDate}</h4>
        </div>
    </div>
</li>
  )
}

export default Eventid
