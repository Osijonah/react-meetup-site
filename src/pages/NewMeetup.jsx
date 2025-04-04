import { useNavigate } from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm"

export default function NewMeetup () {
    
    const navigate = useNavigate();
    
    const handleAddMeetup = (meetupData) => {
        fetch(`https://react-meetup-21b20-default-rtdb.firebaseio.com/meetups.json`,
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json' 
                }
            }
        ).then(()=>{
        navigate('/', {replace:true});
        });
    }
    
    return (
        <div>
            <h1>Add New Meetup</h1>
            <NewMeetupForm submitForm={handleAddMeetup} />
        </div>
    )
}