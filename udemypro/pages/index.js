import EventList from "@/components/events/EventList"
import { getAllEvents, getFeaturedEvents } from "@/dummy-data"


const Home = () => {

    const featuredEvents = getFeaturedEvents()
    // const allEvents=getAllEvents()
    // console.log(featuredEvents)

    // console.log(allEvents)

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  )
}

export default Home
