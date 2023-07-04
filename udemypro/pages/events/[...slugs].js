import EventList from "@/components/events/EventList";
import { getFilteredEvents } from "@/dummy-data";
import { getFilteredEventsData } from "@/helpers/apicalling";
import { useRouter } from "next/router"


const FilteredPage = ( props) => {
const router=useRouter();

const filterEvents = props.event


if(!filterEvents){
  return <p> ...LOading </p>
}



if(!filterEvents || filterEvents.length<1){
  return <p> ...No Data </p>
}

  return (
    <div>
      <EventList items={filterEvents} />
    </div>
  )
}

export async function getServerSideProps(context){

  const filteredData = context.params.slugs
  const filteredYear =  +filteredData[0]
  const filteredMonth =  +filteredData[1]
  
  // console.log(filteredYear)
  // console.log(filteredMonth)
  
  const filterEvents= await getFilteredEventsData({
    year: filteredYear,
    month: filteredMonth,
  });
  
  return {
    props:{
      event : filterEvents
    }
  }
  

}

export default FilteredPage
