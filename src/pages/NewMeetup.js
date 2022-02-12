import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {useNavigate} from 'react-router-dom';

const NewMeetupPage = () => {
  const navigate = useNavigate();
  const addHandler = (meetupData) => {
    //send HTTP request here
    fetch(
      'https://meetup-project-c2c0b-default-rtdb.firebaseio.com/meetups.json', {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'content-type': 'application/json'
        }
      }
      ).then(()=>{
        navigate('/')
      });
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAdd={addHandler} />
    </section>
  );
};

export default NewMeetupPage;
