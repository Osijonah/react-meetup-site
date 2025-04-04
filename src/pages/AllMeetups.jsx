import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";



export default function AllMeetups () {
const [isLoading, setIsLoading] = useState(false);
const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(()=>{
    setIsLoading(true);
    fetch('https://react-meetup-21b20-default-rtdb.firebaseio.com/meetups.json')
    .then(response => response.json())
    .then((data)=>{
      
      const meetups = [];

      for ( const key in data ) {
        const meetup = {
          id: key,
          ...data[key]
        }
        meetups.push(meetup);
      }

      setIsLoading(false);
      setLoadedMeetups(meetups);
    })
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Isloading...</p>
      </section>
    )
  }
    
    return (
        <section>
          <MeetupList meetups={loadedMeetups}/>
        </section>
    )
}