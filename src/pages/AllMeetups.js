import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
// ];

const AllMeetupsPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    setLoading(true); //use useEffect for code that does not affect the
    fetch(
      "https://meetup-project-c2c0b-default-rtdb.firebaseio.com/meetups.json"
    ) //add async later
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        //data was in a object- transform into array
        const meetups = [];

        for (const key in data) {
          console.log(data);
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }
        setLoading(false);
        setLoadedData(meetups);
      });
  }, []); //two arguments=> a function AND am array of dependencies ie- what value are watching for a change to execute? the rule is: all external values the function relies on

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedData} />
    </section>
  );
};

export default AllMeetupsPage;
