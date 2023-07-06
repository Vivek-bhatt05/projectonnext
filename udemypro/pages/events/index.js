import EventList from "@/components/events/EventList"
import EventSearch from "@/components/events/EventSearch"
import { getAllEvents } from "@/dummy-data"
import { getAllEventsData } from "@/helpers/apicalling"
import Head from "next/head"
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
      <Head>
        <title>
          All Events
        </title>
        <meta name="description" content="Find various events going to be held" />
      </Head>
      <EventSearch onSearch={findEvent} />
      <EventList items={allEvents} />
    </div>
  )
}
export async function getStaticProps(){

  const allData = await getAllEventsData()
  console.log("rebuilding")

  return {
    props: {
      events: allData
    }
    // revalidate:60
  }
}

export default Events
