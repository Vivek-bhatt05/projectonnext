import { getEventById } from "@/dummy-data";
import { getAllEventsData, getEventByIdData, getFeaturedEventsData } from "@/helpers/apicalling";
import Head from "next/head";
import { useRouter } from "next/router"


const Eventid = (props) => {

  const event = props.singleEvent

  if(!event){
    return <p>No event</p>
  }


  const readyDate= new Date(event.date).toLocaleDateString('en-US',{
    day: 'numeric',
    month:'long',
    year:'numeric'
})
  
  return (
    <>
    <Head>
        <title>
          {event.title}
        </title>
        <meta name="description" content={event.description} />
      </Head>
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
</>
  )
}

export async function getStaticProps(context){
  const eventId = context.params.eventid;

  const event = await getEventByIdData(eventId);

  return {
    props:{
      singleEvent : event
    },
    revalidate:30
  }
}

export async function getStaticPaths(){
  const data = await getFeaturedEventsData();
   const ids = data.map((event)=> event.id)


   const paramsPath = ids.map((id)=>({params:{eventid:id}}))


  return {
      paths:paramsPath,
      fallback: true
  }
}

export default Eventid
