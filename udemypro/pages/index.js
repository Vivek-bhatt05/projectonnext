
import EventList from "@/components/events/EventList"
import { getFeaturedEventsData } from "@/helpers/apicalling"
import Head from "next/head"


const Home = (props) => {


  return (
    <div>
      <Head>
        <title>
          Events APP
        </title>
        <meta name="description" content="Find various events going to be held" />
      </Head>
      <EventList items={props.events} />
    </div>
  )
}


export async function getStaticProps(){

  const featuredEvents = await getFeaturedEventsData()
  // console.log(featuredEvents);

  return {
    props: {
      events: featuredEvents
    },
    revalidate:2
  }
}

export default Home
