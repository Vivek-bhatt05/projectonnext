import EventList from "@/components/events/EventList"
import EventSearch from "@/components/events/EventSearch"
import { getAllEvents } from "@/dummy-data"
import { useRouter } from "next/router"


const Events = () => {


    const allEvents=getAllEvents()

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

export default Events
