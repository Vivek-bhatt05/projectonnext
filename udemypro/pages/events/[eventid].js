import { getEventById } from "@/dummy-data";
import { getAllEventsData, getEventByIdData } from "@/helpers/apicalling";
import { useRouter } from "next/router"


const Eventid = (props) => {

  const event = props.singleEvent

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
        <h4>{readyDate}</h4>
        </div>
    </div>
</li>
  )
}

export async function getStaticProps(context){
  const eventId = context.params.eventid;

  const event = await getEventByIdData(eventId);

  return {
    props:{
      singleEvent : event
    }
  }
}

export async function getStaticPaths(){
  const data = await getAllEventsData();
   const ids = data.map((event)=> event.id)


   const paramsPath = ids.map((id)=>({params:{eventid:id}}))


  return {
      paths:paramsPath,
      fallback: true
  }
}

export default Eventid
