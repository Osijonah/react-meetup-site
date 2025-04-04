import MeetupItem from "./MeetupItem";

import classes from './MeetupList.module.css';

const MeetupList = ({meetups}) => {
    return <ul className={classes.list}>
        {meetups.map((meetup)=>{
            // return <MeetupItem key={meetup.id} meetup={meetup}/>
            return <MeetupItem key={meetup.id} image={meetup.image} id={meetup.id} title={meetup.title} address={meetup.address} description={meetup.description} />
        })}
        
    </ul>
}

export default MeetupList;