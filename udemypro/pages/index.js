import EventList from "@/components/events/EventList"
import { getFeaturedEventsData } from "@/helpers/apicalling"


const Home = (props) => {

  return (
    <div>
      <EventList items={props.events} />
    </div>
  )
}

export async function getStaticProps(){

  const featuredEvents = await getFeaturedEventsData()

  return {
    props: {
      events: featuredEvents
    }

  }
}

export default Home
