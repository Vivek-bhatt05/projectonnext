import EventList from "@/components/events/EventList";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router"


const FilteredPage = () => {
const router=useRouter();

const filteredData = router.query.slugs

console.log(filteredData)

if(!filteredData){
  return <p> ...LOading </p>
}

const filteredYear =  +filteredData[0]
const filteredMonth =  +filteredData[1]

console.log(filteredYear)
console.log(filteredMonth)

const filterEvents= getFilteredEvents({
  year: filteredYear,
  month: filteredMonth,
});

console.log(filterEvents)

if(!filterEvents || filterEvents.length<1){
  return <p> ...LOading </p>
}

  return (
    <div>
      <EventList items={filterEvents} />
    </div>
  )
}

export default FilteredPage
