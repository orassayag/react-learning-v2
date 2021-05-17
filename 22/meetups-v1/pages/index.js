// our-domain.com
/* import { useState, useEffect } from 'react'; */
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://officechai.com/wp-content/uploads/2015/05/Cyberecture-egg-shaped-building-mumbai.jpg',
        address: 'Some address 5, 12345, Some City',
        description: 'This is a first meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://officechai.com/wp-content/uploads/2015/05/Cyberecture-egg-shaped-building-mumbai.jpg',
        address: 'Some address 10, 12345, Some City',
        description: 'This is a second meetup!'
    }
];

const HomePage = (props) => {
/*     const [meetups, setMettups] = useState([]);

    useEffect(() => {
        // Send HTTP request and fetch data.
        setMettups([DUMMY_MEETUPS]);
    }, []); */

    return (
        <MeetupList
            meetups={props.meetups}
        />
    );
};

// Re-generate the server side page (create new version of the page from
// the server) each incoming request.
// Use this when you need access to req or res objects, or/and
// your data will change every request.
// Then, your page would be not be cached by the server, and
// the server will create a new page for each request.
/* export const getServerSideProps = async(context) => {
    const req = context.req;
    const res = context.res;
    // Fetch data from an API.
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
    };
}; */

// Re-generate the server side page (create new version of the page from
// the server) every X seconds (revalidate: X).
// Use this when you don't need access to req or res objects, or/and
// your data will not change every request.
// Than, your page would be cached by the server, until the next time
// the server will create a new page.
// THIS CODE WILL RUN ONLY DURING BUILD TIME.
export const getStaticProps = async () => {
    // Fetch data from an API.
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 10
    };
};

export default HomePage;