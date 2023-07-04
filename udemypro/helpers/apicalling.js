export async function getAllEventsData(){
    try{
        const res = await fetch('https://nextjs-326f9-default-rtdb.firebaseio.com/evenst.json')
        const data = await res.json()

        // console.log(data)

        const events=[];

        for(let key in data){
            events.push({
                id:key,
                ...data[key]
            })
        }
        // console.log(events)
        return events
    }
    catch(err){
        console.log(err);
    }
}


export async function getFeaturedEventsData(){
    const featuredEvents = await getAllEventsData();

    // console.log(featuredEvents)

    return featuredEvents.filter((event)=>event.isFeatured)

}

export async function getEventByIdData(id) {

    const getById = await getAllEventsData();

    return getById.find((event) => event.id === id);
  }

  export async function getFilteredEventsData(dateFilter) {
    const { year, month } = dateFilter;

    const events = await getAllEventsData();
  
    let filteredEvents = events.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }