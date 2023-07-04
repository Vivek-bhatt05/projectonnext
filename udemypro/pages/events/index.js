import EventList from "@/components/events/EventList"
import EventSearch from "@/components/events/EventSearch"
import { getAllEvents } from "@/dummy-data"
import { getAllEventsData } from "@/helpers/apicalling"
import { useRouter } from "next/router"


const Events = (props) => {


    const allEvents= props.events

    const router = useRouter()
    const findEvent=(year,month)=>{
      const fullPath = `/events/${year}/${month}`

      router.push(fullPath)
    }

    // console.log(allEvents)

  return (
    <div>
      <EventSearch onSearch={findEvent} />
      <EventList items={allEvents} />
    </div>
  )
}
export async function getStaticProps(){

  const allData = await getAllEventsData()

  return {
    props: {
      events: allData
    },
    revalidate:2000
  }
}

export default Events
