import EventList from "@/components/events/EventList"
import { getAllEvents } from "@/dummy-data"


const Events = () => {


    const allEvents=getAllEvents()

    console.log(allEvents)

  return (
    <div>
      <EventList items={allEvents} />
    </div>
  )
}

export default Events
